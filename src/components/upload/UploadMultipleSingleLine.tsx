import { useDropzone } from 'react-dropzone'
// @mui
import { Box, Stack } from '@mui/material'
import { styled, alpha, useTheme } from '@mui/material/styles'
import { UploadProps } from './types'
import RejectionFiles from './errors/RejectionFiles'
import MultiFilePreview from './preview/MultiFilePreview'
import Iconify from '@components/iconify'

// ----------------------------------------------------------------------

const StyledDropZone = styled('div')(({ theme }) => ({
  outline: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${alpha(theme.palette.grey[500], 0.32)}`,
  '&:hover': {
    opacity: 0.72,
  },
}))

// ----------------------------------------------------------------------

export default function UploadMultipleSingleLine({
  disabled,
  multiple = false,
  error,
  helperText,
  dropzoneHelper,
  title,
  //
  file,
  onDelete,
  //
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  sx,
  maxFiles,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple,
    disabled,
    maxFiles,
    ...other,
  })

  const theme = useTheme()
  const fileLength = files ? files.length : 0
  const hasFiles = files && multiple && fileLength > 0
  const isError = isDragReject || !!error

  return (
    <Box sx={{ width: 1, position: 'relative', pb: 2, ...sx }}>
      <Stack direction="row">
        <Stack direction="row">
          {hasFiles && !disabled && (
            <MultiFilePreview
              sx={{ width: '100px', height: '100px', m: 0, mr: 1 }}
              files={files}
              thumbnail={thumbnail}
              onRemove={onRemove}
            />
          )}
          {fileLength < (maxFiles || 3) && (
            <StyledDropZone
              {...getRootProps()}
              sx={{
                width: '100px',
                height: '100px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'master.light',
                borderColor: 'master.light',
                bgcolor: alpha(theme.palette.master.light, 0.1),
                ...(isDragActive && {
                  opacity: 0.72,
                }),
                ...(isError && {
                  color: 'error.main',
                  bgcolor: 'error.lighter',
                  borderColor: 'error.light',
                }),
                ...(disabled && {
                  opacity: 0.48,
                  pointerEvents: 'none',
                }),
              }}
            >
              <input {...getInputProps()} />
              <Stack textAlign="center" alignItems="center">
                <Iconify icon="ic:round-plus" width={40} sx={{ margin: 'auto' }} />
              </Stack>
            </StyledDropZone>
          )}
        </Stack>
      </Stack>

      <RejectionFiles fileRejections={fileRejections} />

      {helperText && helperText}
    </Box>
  )
}

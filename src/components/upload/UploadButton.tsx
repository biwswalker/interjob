import { useDropzone } from 'react-dropzone'
// @mui
import { Box, Stack, Button, IconButton, ButtonProps } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
//
import Iconify from '../iconify'
//
import { CustomFile, UploadProps } from './types'
import RejectionFiles from './errors/RejectionFiles'
import MultiFilePreview from './preview/MultiFilePreview'
import SingleFilePreview from './preview/SingleFilePreview'

// ----------------------------------------------------------------------

const StyledDropZone = styled('div')(({ theme }) => ({
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // transition: theme.transitions.create('padding'),
}))

// ----------------------------------------------------------------------
interface UploadButtonProps extends UploadProps {
  InputButtonProps?: Partial<ButtonProps>
  label?: string
  onDownload?: (file: CustomFile | string) => void
}

export default function UploadButton({
  disabled,
  multiple = false,
  error,
  helperText,
  dropzoneHelper,
  //
  file,
  onDelete,
  //
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  onDownload,
  sx,
  InputButtonProps = {},
  label,
  ...other
}: UploadButtonProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple,
    disabled,
    ...other,
  })

  const hasFile = !!file && !multiple

  const hasFiles = files && multiple && files.length > 0

  const isError = isDragReject || !!error

  return (
    <Box sx={{ width: 1, position: 'relative', ...sx }}>
      <StyledDropZone
        {...getRootProps()}
        sx={{
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
          // ...(hasFile && {
          //     padding: '12% 0',
          // }),
        }}
      >
        <input {...getInputProps()} />

        <Button size="small" variant="contained" color="inherit" {...InputButtonProps}>
          {label || 'Upload files'}
        </Button>

        {/* {hasFile && (
                    <MultiFilePreview files={files} thumbnail={thumbnail} onRemove={onRemove} />
                )} */}
      </StyledDropZone>

      {hasFile && !disabled && (
        <Box sx={{ my: 3 }}>
          <MultiFilePreview files={[file]} thumbnail={thumbnail} onRemove={onRemove} onDownload={onDownload} />
        </Box>
      )}

      <RejectionFiles fileRejections={fileRejections} />

      {hasFile && !disabled && onDelete && (
        <IconButton
          size="small"
          onClick={onDelete}
          sx={{
            top: 16,
            right: 16,
            zIndex: 9,
            position: 'absolute',
            color: (theme) => alpha(theme.palette.common.white, 0.8),
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
            },
          }}
        >
          <Iconify icon="eva:close-fill" width={18} />
        </IconButton>
      )}

      {hasFiles && !disabled && (
        <>
          <Box sx={{ my: 3 }}>
            <MultiFilePreview files={files} thumbnail={thumbnail} onRemove={onRemove} onDownload={onDownload} />
          </Box>

          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
            {onRemoveAll && (
              <Button color="inherit" variant="outlined" size="small" onClick={onRemoveAll}>
                Remove all
              </Button>
            )}

            {onUpload && (
              <Button size="small" variant="contained" onClick={onUpload}>
                Upload files
              </Button>
            )}
          </Stack>
        </>
      )}

      {helperText && helperText}
    </Box>
  )
}

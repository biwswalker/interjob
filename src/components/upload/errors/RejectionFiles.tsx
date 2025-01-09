import { FileRejection } from 'react-dropzone'
// @mui
import { alpha } from '@mui/material/styles'
import { Box, Paper, Typography } from '@mui/material'
// utils
import { fData } from '@utils/formatNumber'
//
import { fileData } from '../../file-thumbnail'
import { get } from 'lodash'

// ----------------------------------------------------------------------

type Props = {
  fileRejections: FileRejection[] | readonly FileRejection[]
}

export default function RejectionFiles({ fileRejections }: Props) {
  if (!fileRejections.length) {
    return null
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        mt: 3,
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
        borderColor: (theme) => alpha(theme.palette.error.main, 0.24),
      }}
    >
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = fileData(file)

        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path} - {size ? fData(size) : ''}
            </Typography>

            {errors.map((error) => {
              function extractNumber(text: string) {
                const regex = /\d+/
                const result = text.match(regex)
                return result ? parseInt(result[0], 10) : null
              }
              const number = extractNumber(error.message)
              const megabyte = fData(number) || '2 MB'

              const errorMessages = {
                'file-too-large': (
                  <Box key={error.code} component="span" sx={{ typography: 'caption' }}>
                    - {`ไฟล์มีขนาดมากกว่า ${megabyte}`}
                  </Box>
                ),
              }
              return (
                get(errorMessages, error.code, '') || (
                  <Box key={error.code} component="span" sx={{ typography: 'caption' }}>
                    - {error.message}
                  </Box>
                )
              )
            })}
          </Box>
        )
      })}
    </Paper>
  )
}

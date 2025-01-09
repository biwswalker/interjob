// @mui
import { DialogProps } from '@mui/material'
import { ColorSchema } from '@theme/palette'

// ----------------------------------------------------------------------

export interface ConfirmDialogProps extends Omit<DialogProps, 'title' | 'content'> {
  title: React.ReactNode
  content?: React.ReactNode
  action: React.ReactNode
  open: boolean
  onClose: VoidFunction
  dismissText?: string
  cancelButtonColor?: ColorSchema | 'inherit'
}

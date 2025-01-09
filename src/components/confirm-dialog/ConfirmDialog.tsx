// @mui
import { Dialog, DialogTitle, DialogActions, DialogContent, Typography } from '@mui/material'
import { ConfirmDialogProps } from './types'
import Image from '@components/image'
import { LoadingButton } from '@mui/lab'

// ----------------------------------------------------------------------

export default function ConfirmDialog({
  title,
  content,
  action,
  open,
  onClose,
  dismissText,
  cancelButtonColor,
  ...other
}: ConfirmDialogProps) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} {...other}>
      <DialogTitle>
        <Image
          alt="dialog-logo"
          src="images/logo/Logo.png"
          sx={{ height: '50px', width: '245px', objectFit: 'contain' }}
          disabledEffect
        />
        <Typography variant="h3" my={4}>
          {title}
        </Typography>
      </DialogTitle>

      {content && <DialogContent sx={{ typography: 'body2' }}> {content} </DialogContent>}

      <DialogActions>
        {action}
        <LoadingButton
          fullWidth
          color={cancelButtonColor}
          size="large"
          type="button"
          variant="contained"
          onClick={onClose}
        >
          {dismissText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

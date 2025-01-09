import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function DatePicker(theme: Theme) {
  return {
    MuiDatePicker: {
      defaultProps: {
        inputFormat: 'dd/MM/yyyy',
      },
      // styleOverrides: {
      //   root: {
      //     color: '#bbdefb',
      //     borderRadius: '15px',
      //     borderWidth: '1px',
      //     borderColor: '#2196f3',
      //     border: '1px solid',
      //     backgroundColor: '#0d47a1',
      //   },
      // },
    },
  }
}

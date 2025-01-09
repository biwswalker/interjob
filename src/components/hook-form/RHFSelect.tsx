// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { TextField, TextFieldProps } from '@mui/material'

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string
  children: React.ReactNode
}

export default function RHFSelect({ name, children, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          inputRef={ref}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  )
}

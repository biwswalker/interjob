// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { TextField, TextFieldProps } from '@mui/material'

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string
}

export default function RHFTextField({ name, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          inputRef={ref}
          {...other}
        />
      )}
    />
  )
}

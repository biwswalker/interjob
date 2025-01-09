// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { Radio, RadioGroup, FormHelperText, RadioGroupProps, FormControlLabel } from '@mui/material'
import { ReactNode } from 'react'

// ----------------------------------------------------------------------

type Props = RadioGroupProps & {
  name: string
  disabled?: boolean
  options: {
    label: string | ReactNode
    value: any
  }[]
}

export default function RHFRadioGroup({ name, disabled, options, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <RadioGroup {...field} row {...other}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio disabled={disabled} />}
                label={option.label}
              />
            ))}
          </RadioGroup>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  )
}

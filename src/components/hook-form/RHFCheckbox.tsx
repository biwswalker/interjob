// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { Checkbox, FormControlLabel, FormGroup, FormControlLabelProps } from '@mui/material'

// ----------------------------------------------------------------------

interface RHFCheckboxProps extends Omit<FormControlLabelProps, 'control'> {
  name: string
}

export function RHFCheckbox({ name, ...other }: RHFCheckboxProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox {...field} checked={field.value} {...(other.onChange ? { onChange: other.onChange } : {})} />
          }
          {...other}
        />
      )}
    />
  )
}

// ----------------------------------------------------------------------

interface RHFMultiCheckboxProps extends Omit<FormControlLabelProps, 'control' | 'label'> {
  name: string
  options: {
    label: string
    value: any
  }[]
}

export function RHFMultiCheckbox({ name, options, ...other }: RHFMultiCheckboxProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option: string) =>
          field.value.includes(option)
            ? field.value.filter((value: string) => value !== option)
            : [...field.value, option]

        return (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={field.value.includes(option.value)}
                    onChange={() => field.onChange(onSelected(option.value))}
                  />
                }
                label={option.label}
                {...other}
              />
            ))}
          </FormGroup>
        )
      }}
    />
  )
}

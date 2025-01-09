// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { ButtonProps, FormHelperText } from '@mui/material'
//
import { UploadAvatar, Upload, UploadBox, UploadProps, CustomFile } from '../upload'
import UploadButton from '@components/upload/UploadButton'
import { ReactNode } from 'react'
import UploadMultipleSingleLine from '@components/upload/UploadMultipleSingleLine'

// ----------------------------------------------------------------------

interface Props extends Omit<UploadProps, 'file'> {
  name: string
  multiple?: boolean
}

// ----------------------------------------------------------------------

export function RHFUploadAvatar({ name, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isError = !!error && !field.value

        return (
          <div>
            <UploadAvatar
              accept={{
                'image/*': [],
              }}
              error={isError}
              file={field.value}
              {...other}
            />

            {isError && (
              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {error.message}
              </FormHelperText>
            )}
          </div>
        )
      }}
    />
  )
}

// ----------------------------------------------------------------------

export function RHFUploadBox({ name, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isError = !!error && !field.value?.length

        return <UploadBox error={isError} files={field.value} {...other} />
      }}
    />
  )
}

// ----------------------------------------------------------------------

export function RHFUpload({ name, multiple, ...other }: Props & { children?: ReactNode }) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isErrorWithSingle = !!error // && !field.value

        const isErrorWithMultiple = !!error // && !field.value?.length

        return multiple ? (
          <Upload
            multiple
            accept={{ 'image/*': [] }}
            files={field.value}
            error={isErrorWithMultiple}
            helperText={
              isErrorWithMultiple && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        ) : (
          <Upload
            accept={{ 'image/*': [] }}
            file={field.value}
            error={isErrorWithSingle}
            helperText={
              isErrorWithSingle && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        )
      }}
    />
  )
}

export function RHFUploadMultipleSingleLine({ name, multiple, ...other }: Props) {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isErrorWithMultiple = !!error // && !field.value?.length
        return (
          <UploadMultipleSingleLine
            multiple
            accept={{ 'image/*': [] }}
            files={field.value}
            error={isErrorWithMultiple}
            helperText={
              isErrorWithMultiple && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        )
      }}
    />
  )
}

export function RHFUploadButton({
  name,
  multiple,
  ...other
}: Props & {
  InputButtonProps?: Partial<ButtonProps>
  label?: string
  onDownload?: (file: CustomFile | string) => void
}) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isErrorWithSingle = !!error && !field.value

        const isErrorWithMultiple = !!error && !field.value?.length

        return multiple ? (
          <UploadButton
            multiple
            accept={{ 'image/*': [] }}
            files={field.value}
            error={isErrorWithMultiple}
            helperText={
              isErrorWithMultiple && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        ) : (
          <UploadButton
            accept={{ 'image/*': [] }}
            file={field.value}
            error={isErrorWithSingle}
            helperText={
              isErrorWithSingle && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        )
      }}
    />
  )
}

// form
import { FormEventHandler } from 'react'
import { FormProvider as Form, UseFormReturn } from 'react-hook-form'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
  methods: UseFormReturn<any>
  onSubmit?: FormEventHandler
}

export default function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}

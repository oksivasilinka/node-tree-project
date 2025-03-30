import { useCreateTreeNodeForm } from '@/features/create-tree-node-form/model/form'
import { FormProvider } from 'react-hook-form'
import {
  CreateTreeNodeFormBody,
  CreateTreeNodeFormFooter,
} from '@/features/create-tree-node-form/ui'

import s from './create-tree-node-form.module.scss'

type CreateTreeNodeFormProps = {
  id: number
}

export const CreateTreeNodeForm = ({ id }: CreateTreeNodeFormProps) => {
  const { form, ...rest } = useCreateTreeNodeForm({ parentId: id })

  return (
    <FormProvider {...form}>
      <form className={s.form}>
        <CreateTreeNodeFormBody form={form} />
        <CreateTreeNodeFormFooter {...rest} />
      </form>
    </FormProvider>
  )
}

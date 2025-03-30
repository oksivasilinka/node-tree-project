import { FormProvider } from 'react-hook-form'

import s from './rename-tree-node-form.module.scss'
import { useRenameTreeNodeForm } from '@/features/rename-tree-node-form/model/form'
import {
  RenameTreeNodeFormBody,
  RenameTreeNodeFormFooter,
} from '@/features/rename-tree-node-form/ui'

type CreateTreeNodeFormProps = {
  id: number
}

export const RenameTreeNodeForm = ({ id }: CreateTreeNodeFormProps) => {
  const { form, ...rest } = useRenameTreeNodeForm({ parentId: id })

  return (
    <FormProvider {...form}>
      <form className={s.form}>
        <RenameTreeNodeFormBody form={form} />
        <RenameTreeNodeFormFooter {...rest} />
      </form>
    </FormProvider>
  )
}

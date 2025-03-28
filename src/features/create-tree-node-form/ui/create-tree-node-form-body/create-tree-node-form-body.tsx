import { FormInput } from '@/shared/ui'
import { CreateTreeNodeFormReturnType } from '@/features/create-tree-node-form/model/form'

type CreateTreeNodeFormBodyProps = Pick<CreateTreeNodeFormReturnType, 'form'>

export const CreateTreeNodeFormBody = ({ form }: CreateTreeNodeFormBodyProps) => {
  return (
    <FormInput
      name={'nodeName'}
      control={form.control}
    />
  )
}

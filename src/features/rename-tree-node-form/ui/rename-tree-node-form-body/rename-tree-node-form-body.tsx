import { FormInput } from '@/shared/ui'
import { RenameTreeNodeFormReturnType } from '@/features/rename-tree-node-form/model/form'

type RenameTreeNodeFormBodyProps = Pick<RenameTreeNodeFormReturnType, 'form'>

export const RenameTreeNodeFormBody = ({ form }: RenameTreeNodeFormBodyProps) => {
  return (
    <FormInput
      name={'newNodeName'}
      control={form.control}
      label={'New node name'}
      placeholder={'Enter new name'}
    />
  )
}

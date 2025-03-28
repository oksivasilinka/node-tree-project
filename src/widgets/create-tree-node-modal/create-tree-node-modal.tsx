import { Button, ModalWindow } from '@/shared/ui'
import { CreateTreeNodeForm } from '@/features/create-tree-node-form/create-tree-node-form.tsx'

type CreateTreeNodeModalProps = {
  id?: number
}

export const CreateTreeNodeModal = ({ id }: CreateTreeNodeModalProps) => {
  return (
    <ModalWindow
      title={'Add Tree Node'}
      trigger={<Button>+</Button>}
    >
      <CreateTreeNodeForm id={id} />
    </ModalWindow>
  )
}

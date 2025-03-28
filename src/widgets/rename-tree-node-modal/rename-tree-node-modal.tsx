import { Button, ModalWindow } from '@/shared/ui'
import { RenameTreeNodeForm } from '@/features/rename-tree-node-form/rename-tree-node-form.tsx'

type RenameTreeNodeModalProps = {
  id?: number
}

export const RenameTreeNodeModal = ({ id }: RenameTreeNodeModalProps) => {
  return (
    <ModalWindow
      title={'Rename Tree Node'}
      trigger={<Button>rename</Button>}
    >
      <RenameTreeNodeForm id={id} />
    </ModalWindow>
  )
}

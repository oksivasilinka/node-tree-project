import { Button, ModalWindow } from '@/shared/ui'
import { RenameTreeNodeForm } from '@/features/rename-tree-node-form'
import { PencilIcon } from '@/shared/icon'

type RenameTreeNodeModalProps = {
  id?: number
}

export const RenameTreeNodeModal = ({ id }: RenameTreeNodeModalProps) => {
  return (
    <ModalWindow
      title={'Rename Tree Node'}
      trigger={
        <Button variant={'icon'}>
          <PencilIcon
            width={20}
            height={20}
          />
        </Button>
      }
    >
      <RenameTreeNodeForm id={id} />
    </ModalWindow>
  )
}

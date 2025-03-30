import { Button, ModalWindow } from '@/shared/ui'
import { CreateTreeNodeForm } from '@/features/create-tree-node-form/create-tree-node-form.tsx'
import { PlusCircle } from '@/shared/icon'

type CreateTreeNodeModalProps = {
  id?: number
}

export const CreateTreeNodeModal = ({ id }: CreateTreeNodeModalProps) => {
  if (!id) return null
  return (
    <ModalWindow
      title={'Add Tree Node'}
      trigger={
        <Button variant={'icon'}>
          <PlusCircle
            width={20}
            height={20}
          />
        </Button>
      }
    >
      <CreateTreeNodeForm id={id} />
    </ModalWindow>
  )
}

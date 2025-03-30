import { Button, DeleteModalWindow } from '@/shared/ui'
import { useDeleteUserTreeNodeMutation } from '@/shared/api/user-tree-api'
import { TreeNode } from '@/entties/types'
import { Trash } from '@/shared/icon'
import s from './delete-tree-node-modal.module.scss'

type DeleteTreeNodeModalProps = {
  node?: TreeNode
  disabled?: boolean
}

export const DeleteTreeNodeModal = ({ node, disabled }: DeleteTreeNodeModalProps) => {
  const [deleteBanner, { isLoading }] = useDeleteUserTreeNodeMutation()

  if (!node?.id) return null

  const onDelete = () => {
    deleteBanner({ nodeId: node.id })
  }

  return (
    <DeleteModalWindow
      titleSubmitButton={'Delete'}
      trigger={
        <Button
          variant={'icon'}
          className={s.button}
          disabled={disabled}
        >
          <Trash
            width={20}
            height={20}
          />
        </Button>
      }
      title={'Delete Tree Node'}
      description={`Do you want to delete ${node?.name}`}
      disabled={isLoading}
      onDelete={onDelete}
    />
  )
}

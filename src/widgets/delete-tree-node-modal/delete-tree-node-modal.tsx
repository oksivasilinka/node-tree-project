import { Button, DeleteModalWindow } from '@/shared/ui'
import { useDeleteUserTreeNodeMutation } from '@/shared/api/user-tree-api'
import { TreeNode } from '@/entties/types'
import { Trash } from '@/shared/icon'
import s from './delete-tree-node-modal.module.scss'
import { ROOT_FOLDER } from '@/shared/constants'

type DeleteTreeNodeModalProps = {
  node?: TreeNode
  disabled?: boolean
}

export const DeleteTreeNodeModal = ({ node, disabled }: DeleteTreeNodeModalProps) => {
  const [deleteBanner, { isLoading }] = useDeleteUserTreeNodeMutation()

  const onDelete = () => {
    deleteBanner({ nodeId: `${node?.id}`, treeName: ROOT_FOLDER })
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

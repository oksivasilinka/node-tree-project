import { Button, DeleteModalWindow } from '@/shared/ui'
import { useDeleteUserTreeNodeMutation } from '@/shared/api/user-tree-api'
import { TreeNode } from '@/entties/tree-node-item'

type DeleteTreeNodeModalProps = {
  node?: TreeNode
}

export const DeleteTreeNodeModal = ({ node }: DeleteTreeNodeModalProps) => {
  const [deleteBanner, { isLoading }] = useDeleteUserTreeNodeMutation()

  const onDelete = () => {
    deleteBanner({ nodeId: `${node?.id}`, treeName: import.meta.env.VITE_ROOT_FOLDER })
  }

  return (
    <DeleteModalWindow
      titleSubmitButton={'Delete'}
      trigger={<Button>-</Button>}
      title={'Delete Tree Node'}
      description={`Do you want to delete ${node?.name}`}
      disabled={isLoading}
      onDelete={onDelete}
    />
  )
}

import { ClickPrevented, ConditionalRender } from '@/shared/ui'
import { CreateTreeNodeModal } from '@/widgets/create-tree-node-modal'
import { ROOT_FOLDER } from '@/shared/constants'
import { RenameTreeNodeModal } from '@/widgets/rename-tree-node-modal'
import { DeleteTreeNodeModal } from '@/widgets/delete-tree-node-modal'
import { TreeNode } from '@/entties/types'

type TreeNodeItemActionsProps = {
  node?: TreeNode
  isActive?: boolean
}
export const TreeNodeItemActions = ({ node, isActive }: TreeNodeItemActionsProps) => {
  const accessDeleteAndRenameFolder = node?.name !== ROOT_FOLDER

  return (
    <ClickPrevented>
      <ConditionalRender condition={isActive}>
        <CreateTreeNodeModal id={node?.id} />
        <ConditionalRender condition={accessDeleteAndRenameFolder}>
          <RenameTreeNodeModal id={node?.id} />
          <DeleteTreeNodeModal
            node={node}
            disabled={!!node?.children?.length}
          />
        </ConditionalRender>
      </ConditionalRender>
    </ClickPrevented>
  )
}

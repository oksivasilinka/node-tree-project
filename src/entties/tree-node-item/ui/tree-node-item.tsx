import { ClickPrevented, ConditionalRender } from '@/shared/ui'
import { TreeNode } from '@/entties/tree-node-item'
import { ArrowBottom } from '@/shared/icon'
import s from './tree-node-item.module.scss'
import { CreateTreeNodeModal } from '@/widgets/create-tree-node-modal'

type TreeNodeItemProps = {
  node?: TreeNode
  onClick?: (node?: TreeNode) => void
}
export const TreeNodeItem = ({ node, onClick }: TreeNodeItemProps) => {
  return (
    <ConditionalRender condition={node}>
      <button
        key={node?.id}
        type='button'
        className={s.button}
        onClick={() => onClick?.(node)}
      >
        <ArrowBottom
          width={24}
          height={24}
        />
        <span>{node?.name}</span>

        <ClickPrevented>
          <CreateTreeNodeModal id={node?.id} />
        </ClickPrevented>
      </button>
    </ConditionalRender>
  )
}

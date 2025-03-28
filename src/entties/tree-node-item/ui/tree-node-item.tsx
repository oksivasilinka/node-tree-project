import { ClickPrevented, ConditionalRender } from '@/shared/ui'
import { TreeNode } from '@/entties/tree-node-item'
import { ArrowBottom } from '@/shared/icon'
import s from './tree-node-item.module.scss'
import { CreateTreeNodeModal } from '@/widgets/create-tree-node-modal'
import { TreeNodeList } from '@/views/tree-node-view-list/ui'
import { RenameTreeNodeModal } from '@/widgets/rename-tree-node-modal'

type TreeNodeItemProps = {
  node?: TreeNode
  onClick?: (id: number) => void
  openIds: number[] | null
}

export const TreeNodeItem = ({ node, onClick, openIds }: TreeNodeItemProps) => {
  const isOpenFolder = node?.id && openIds?.includes(node.id)

  const arrowCN = isOpenFolder ? s.arrow : ''
  return (
    <ConditionalRender condition={node}>
      <button
        type='button'
        className={s.button}
        onClick={() => node?.id && onClick?.(node.id)}
      >
        <ConditionalRender condition={node?.children.length}>
          <ArrowBottom
            className={arrowCN}
            width={24}
            height={24}
          />
        </ConditionalRender>

        <span>{node?.name}</span>

        <ClickPrevented>
          <CreateTreeNodeModal id={node?.id} />
          <RenameTreeNodeModal id={node?.id} />
        </ClickPrevented>
      </button>
      <ConditionalRender condition={isOpenFolder}>
        <TreeNodeList
          items={node?.children}
          openIds={openIds}
          onClick={onClick}
        />
      </ConditionalRender>
    </ConditionalRender>
  )
}

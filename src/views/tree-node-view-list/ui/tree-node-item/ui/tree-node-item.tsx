import { ConditionalRender } from '@/shared/ui'
import { ArrowBottom } from '@/shared/icon'
import s from './tree-node-item.module.scss'
import { TreeNode } from '@/entties/types'
import { TreeNodeItemActions } from '@/entties/ui'
import { TreeNodeList } from '@/views/tree-node-view-list/ui'

type TreeNodeItemProps = {
  node?: TreeNode
  onClick?: (id: number) => void
  openIds: number[] | null
}

export const TreeNodeItem = ({ node, onClick, openIds }: TreeNodeItemProps) => {
  const isOpenFolder = node?.id && openIds?.includes(node.id)

  const isActive = openIds?.at(-1) === node?.id

  const arrowCN = isOpenFolder ? s.arrow : ''
  const buttonN = `${s.button} ${isActive && s.active} ${!node?.children.length ? s.noPointer : ''}`

  return (
    <ConditionalRender condition={node}>
      <div
        className={buttonN}
        onClick={() => node?.id && onClick?.(node.id)}
      >
        <div className={s.iconWrapper}>
          <ConditionalRender condition={node?.children.length}>
            <ArrowBottom
              className={arrowCN}
              width={20}
              height={20}
            />
          </ConditionalRender>
        </div>
        <div className={s.itemWrapper}>
          <span>{node?.name}</span>
          <TreeNodeItemActions
            node={node}
            isActive={isActive}
          />
        </div>
      </div>
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

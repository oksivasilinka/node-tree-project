import s from './tree-node-list.module.scss'
import { ConditionalRender } from '@/shared/ui'
import { TreeNode } from '@/entties/types'
import { TreeNodeItem } from '@/views/tree-node-view-list/ui'

type TreeNodeListProps = {
  items?: TreeNode[] | null
  onClick?: (id: number) => void
  openIds: number[] | null
}

export const TreeNodeList = ({ items, onClick, openIds }: TreeNodeListProps) => {
  return (
    <ConditionalRender condition={items}>
      <div className={s.list}>
        {items?.map((node) => {
          return (
            <TreeNodeItem
              key={node.id}
              openIds={openIds}
              node={node}
              onClick={onClick}
            />
          )
        })}
      </div>
    </ConditionalRender>
  )
}

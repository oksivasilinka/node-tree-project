import { TreeNode, TreeNodeItem } from '@/entties/tree-node-item'
import s from './tree-node-list.module.scss'
import { ConditionalRender } from '@/shared/ui'

type TreeNodeListProps = {
  items?: TreeNode[] | null
  onClick?: (node?: TreeNode) => void
  parentId?: string | null
}

export const TreeNodeList = ({ items, onClick }: TreeNodeListProps) => {
  return (
    <ConditionalRender condition={items}>
      <div className={s.list}>
        {items?.map((node) => {
          return (
            <TreeNodeItem
              key={node.id}
              node={node}
              onClick={onClick}
            />
          )
        })}
      </div>
    </ConditionalRender>
  )
}

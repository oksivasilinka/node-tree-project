import { ReactNode } from 'react'
import { TreeNode, TreeNodeItem } from '@/entties/tree-node-item'
import s from './tree-node-list.module.scss'

type TreeNodeListProps = {
  items?: TreeNode[] | null
  onClick?: (node?: TreeNode) => void
  actions?: (node?: TreeNode) => ReactNode
  parentId?: string | null
}

export const TreeNodeList = ({ items, actions, onClick }: TreeNodeListProps) => {
  if (!items) return null

  return (
    <div className={s.list}>
      {items?.map((node) => {
        return (
          <TreeNodeItem
            key={node.id}
            node={node}
            onClick={onClick}
            actions={actions}
          />
        )
      })}
    </div>
  )
}

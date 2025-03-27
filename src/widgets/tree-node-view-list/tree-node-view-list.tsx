import { useEffect } from 'react'
import { useGetUserTreeMutation } from '@/shared/api/user-tree-api'
import { TreeNodeList } from './ui'
import { TreeNodeItem } from '@/entties/tree-node-item'
import { ConditionalRender } from '@/shared/ui'

export const TreeNodeViewList = () => {
  const [getTree, { data: treeNode, isLoading }] = useGetUserTreeMutation()

  useEffect(() => {
    getTree({ treeName: import.meta.env.VITE_ROOT_FOLDER })
  }, [getTree])

  return (
    <ConditionalRender condition={treeNode && !isLoading}>
      <TreeNodeItem
        key={treeNode?.id}
        node={treeNode}
      />
      <TreeNodeList items={treeNode?.children} />
    </ConditionalRender>
  )
}

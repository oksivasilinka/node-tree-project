import { TreeNodeList } from './ui'
import { TreeNodeItem } from '@/entties/tree-node-item'
import { ConditionalRender } from '@/shared/ui'
import { useGetUserTreeQuery } from '@/shared/api/user-tree-api'

export const TreeNodeViewList = () => {
  const { data: treeNode, isFetching } = useGetUserTreeQuery({
    treeName: import.meta.env.VITE_ROOT_FOLDER,
  })

  return (
    <ConditionalRender condition={treeNode?.id && !isFetching}>
      <TreeNodeItem
        key={treeNode?.id}
        node={treeNode}
      />
      <TreeNodeList items={treeNode?.children} />
    </ConditionalRender>
  )
}

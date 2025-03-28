import { TreeNodeItem } from '@/entties/tree-node-item'
import { ConditionalRender } from '@/shared/ui'
import { useGetUserTreeQuery } from '@/shared/api/user-tree-api'
import { useStateTreeContext } from '@/shared/providers'

export const TreeNodeViewList = () => {
  const { data: treeNode, isFetching } = useGetUserTreeQuery({
    treeName: import.meta.env.VITE_ROOT_FOLDER,
  })

  const { toggleOpenId, openIds } = useStateTreeContext()

  return (
    <ConditionalRender condition={treeNode?.id && !isFetching}>
      <TreeNodeItem
        onClick={toggleOpenId}
        key={treeNode?.id}
        node={treeNode}
        openIds={openIds}
      />
    </ConditionalRender>
  )
}

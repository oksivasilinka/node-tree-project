import { ConditionalRender } from '@/shared/ui'
import { useGetUserTreeQuery } from '@/shared/api/user-tree-api'
import { useStateTreeContext } from '@/shared/providers'
import { ROOT_FOLDER } from '@/shared/constants'
import { TreeNodeItem } from './ui'

export const TreeNodeViewList = () => {
  const { data: treeNode, isFetching } = useGetUserTreeQuery({
    treeName: ROOT_FOLDER,
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

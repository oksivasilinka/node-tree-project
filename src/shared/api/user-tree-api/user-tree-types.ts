type TreeNode = {
  id: number
  name: string
  children: TreeNode
}

export type GetUserTreePayload = {
  treeName: string
}
export type GetUserTreeResponse = TreeNode

export type CreateUserTreeNodePayload = {
  treeName: string
  parentNodeId: string
  nodeName: string
}
export type CreateUserTreeNodeResponse = TreeNode //TODO update types response

export type RenameUserTreeNodePayload = {
  treeName: string
  nodeId: string
  newNodeName: string
}
export type RenameUserTreeNodeResponse = TreeNode //TODO update types response

export type DeleteUserTreeNodePayload = {
  treeName: string
  nodeId: string
}
export type DeleteUserTreeNodeResponse = TreeNode //TODO update types response

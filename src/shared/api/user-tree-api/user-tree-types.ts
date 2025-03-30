import { TreeNode } from '@/entties/types'

export type GetUserTreePayload = {
  treeName: string
}
export type GetUserTreeResponse = TreeNode

export type CreateUserTreeNodePayload = {
  treeName: string
  parentNodeId: string
  nodeName: string
}
export type CreateUserTreeNodeResponse = void

export type RenameUserTreeNodePayload = {
  treeName: string
  nodeId: string
  newNodeName: string
}
export type RenameUserTreeNodeResponse = void

export type DeleteUserTreeNodePayload = {
  treeName: string
  nodeId: string
}
export type DeleteUserTreeNodeResponse = void

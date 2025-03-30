import { TreeNode } from '@/entties/types'

export type GetUserTreePayload = {
  treeName: string
}
export type GetUserTreeResponse = TreeNode

export type CreateUserTreeNodePayload = {
  parentNodeId: number
  name: string
}
export type CreateUserTreeNodeResponse = void

export type RenameUserTreeNodePayload = {
  nodeId: number
  newNodeName: string
}
export type RenameUserTreeNodeResponse = void

export type DeleteUserTreeNodePayload = {
  nodeId: number
}
export type DeleteUserTreeNodeResponse = void

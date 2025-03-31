import { TreeNode } from '@/entties/types'
import { Response } from '@/shared/types'

export type GetUserTreePayload = void

export type GetUserTreeResponse = TreeNode

export type CreateUserTreeNodePayload = {
  parentNodeId: number
  name: string
}
export type CreateUserTreeNodeResponse = Response<void>

export type RenameUserTreeNodePayload = {
  nodeId: number
  newNodeName: string
}
export type RenameUserTreeNodeResponse = Response<void>

export type DeleteUserTreeNodePayload = {
  nodeId: number
}
export type DeleteUserTreeNodeResponse = Response<void>

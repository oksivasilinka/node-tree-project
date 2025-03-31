import { baseApi } from '../base-api.ts'
import {
  CreateUserTreeNodePayload,
  CreateUserTreeNodeResponse,
  DeleteUserTreeNodePayload,
  DeleteUserTreeNodeResponse,
  GetUserTreePayload,
  GetUserTreeResponse,
  RenameUserTreeNodePayload,
  RenameUserTreeNodeResponse,
} from './user-tree-types.ts'
import { PROVIDED_TAGS, ROOT_FOLDER } from '@/shared/constants'

export const userTreeApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getUserTree: builder.query<GetUserTreeResponse, GetUserTreePayload>({
        query: () => ({
          method: 'POST',
          url: `/api.user.tree.get?treeName=${ROOT_FOLDER}`,
        }),
        providesTags: [PROVIDED_TAGS.tree],
      }),
      createUserTreeNode: builder.mutation<CreateUserTreeNodeResponse, CreateUserTreeNodePayload>({
        query: ({ parentNodeId, name }) => ({
          method: 'POST',
          url: `/api.user.tree.node.create?treeName=${ROOT_FOLDER}&parentNodeId=${parentNodeId}&nodeName=${name}`,
        }),
        invalidatesTags: [PROVIDED_TAGS.tree],
      }),
      renameUserTreeNode: builder.mutation<RenameUserTreeNodeResponse, RenameUserTreeNodePayload>({
        query: ({ nodeId, newNodeName }) => ({
          method: 'POST',
          url: `/api.user.tree.node.rename?treeName=${ROOT_FOLDER}&nodeId=${nodeId}&newNodeName=${newNodeName}`,
        }),
        invalidatesTags: [PROVIDED_TAGS.tree],
      }),
      deleteUserTreeNode: builder.mutation<DeleteUserTreeNodeResponse, DeleteUserTreeNodePayload>({
        query: ({ nodeId }) => ({
          method: 'POST',
          url: `/api.user.tree.node.delete?treeName=${ROOT_FOLDER}&nodeId=${nodeId}`,
        }),
        invalidatesTags: [PROVIDED_TAGS.tree],
      }),
    }
  },
})

export const {
  useGetUserTreeQuery,
  useCreateUserTreeNodeMutation,
  useRenameUserTreeNodeMutation,
  useDeleteUserTreeNodeMutation,
} = userTreeApi

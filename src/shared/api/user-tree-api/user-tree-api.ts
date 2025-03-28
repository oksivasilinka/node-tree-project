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
import { PROVIDED_TAGS } from '@/shared/constants'

export const userTreeApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getUserTree: builder.query<GetUserTreeResponse, GetUserTreePayload>({
        query: ({ treeName }) => ({
          method: 'POST',
          url: `/api.user.tree.get?treeName=${treeName}`,
        }),
        providesTags: [PROVIDED_TAGS.tree],
      }),
      createUserTreeNode: builder.mutation<CreateUserTreeNodeResponse, CreateUserTreeNodePayload>({
        query: ({ treeName, parentNodeId, nodeName }) => ({
          method: 'POST',
          url: `/api.user.tree.node.create?treeName=${treeName}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`,
        }),
        invalidatesTags: [PROVIDED_TAGS.tree],
      }),
      renameUserTreeNode: builder.mutation<RenameUserTreeNodeResponse, RenameUserTreeNodePayload>({
        query: () => ({
          method: 'POST',
          url: `/api.user.tree.node.rename`, //TODO add payload
        }),
        invalidatesTags: [PROVIDED_TAGS.tree],
      }),
      deleteUserTreeNode: builder.mutation<DeleteUserTreeNodeResponse, DeleteUserTreeNodePayload>({
        query: () => ({
          method: 'POST',
          url: `/api.user.tree.node.delete`, //TODO add payload
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

import { baseApi } from '@/shared/api'
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

export const userTreeApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getUserTree: builder.mutation<GetUserTreeResponse, GetUserTreePayload>({
        invalidatesTags: [],
        query: ({ treeName }) => ({
          method: 'POST',
          url: `/api.user.tree.get?treeName=${treeName}`,
        }),
      }),
      createUserTreeNode: builder.mutation<CreateUserTreeNodeResponse, CreateUserTreeNodePayload>({
        invalidatesTags: [],
        query: () => ({
          method: 'POST',
          url: `/api.user.tree.create`, //TODO add payload
        }),
      }),
      renameUserTreeNode: builder.mutation<RenameUserTreeNodeResponse, RenameUserTreeNodePayload>({
        invalidatesTags: [],
        query: () => ({
          method: 'POST',
          url: `/api.user.tree.rename`, //TODO add payload
        }),
      }),
      deleteUserTreeNode: builder.mutation<DeleteUserTreeNodeResponse, DeleteUserTreeNodePayload>({
        invalidatesTags: [],
        query: () => ({
          method: 'POST',
          url: `/api.user.tree.delete`, //TODO add payload
        }),
      }),
    }
  },
})

export const {
  useGetUserTreeMutation,
  useCreateUserTreeNodeMutation,
  useRenameUserTreeNodeMutation,
  useDeleteUserTreeNodeMutation,
} = userTreeApi

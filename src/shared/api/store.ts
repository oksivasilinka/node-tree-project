import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from './base-api.ts'
import { userTreeApi } from './user-tree-api'

export const store = configureStore({
  reducer: {
    [userTreeApi.reducerPath]: userTreeApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

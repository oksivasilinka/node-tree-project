export type Response<Type> =
  | Type
  | {
      type: string
      id: string
      data: {
        message: string
      }
    }

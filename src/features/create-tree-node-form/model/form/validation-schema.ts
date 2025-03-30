import * as z from 'zod'

import { FORM_ERRORS } from '@/shared/constants'

export const useCreateTreeNodeFormValidationSchema = () => {
  return z.object({
    parentNodeId: z.number(),
    name: z.string().min(1, FORM_ERRORS.required),
  })
}

export type CreateTreeNodeFormValues = z.infer<
  ReturnType<typeof useCreateTreeNodeFormValidationSchema>
>

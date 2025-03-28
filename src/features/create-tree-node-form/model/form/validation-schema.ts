import * as z from 'zod'

import { FORM_ERRORS } from '@/shared/constants'

export const useCreateTreeNodeFormValidationSchema = () => {
  return z.object({
    treeName: z.string().min(1, FORM_ERRORS.required),
    parentNodeId: z.string().min(1, FORM_ERRORS.required),
    nodeName: z.string().min(1, FORM_ERRORS.required),
  })
}

export type CreateTreeNodeFormValues = z.infer<
  ReturnType<typeof useCreateTreeNodeFormValidationSchema>
>

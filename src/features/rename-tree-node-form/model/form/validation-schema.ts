import * as z from 'zod'

import { FORM_ERRORS } from '@/shared/constants'

export const useRenameTreeNodeFormValidationSchema = () => {
  return z.object({
    treeName: z.string().min(1, FORM_ERRORS.required),
    nodeId: z.string().min(1, FORM_ERRORS.required),
    newNodeName: z.string().min(1, FORM_ERRORS.required),
  })
}

export type RenameTreeNodeFormValues = z.infer<
  ReturnType<typeof useRenameTreeNodeFormValidationSchema>
>

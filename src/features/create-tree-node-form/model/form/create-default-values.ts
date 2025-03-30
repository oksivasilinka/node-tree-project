import { CreateTreeNodeFormValues } from './validation-schema.ts'

export const createDefaultValues = (parentNodeId: number): CreateTreeNodeFormValues => ({
  parentNodeId,
  name: '',
})

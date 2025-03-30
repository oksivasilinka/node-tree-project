import { RenameTreeNodeFormValues } from './validation-schema.ts'

export const createDefaultValues = (nodeId: number): RenameTreeNodeFormValues => ({
  nodeId,
  newNodeName: '',
})

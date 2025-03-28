import { RenameTreeNodeFormValues } from './validation-schema.ts'

export const createDefaultValues = (nodeId?: number): RenameTreeNodeFormValues => ({
  treeName: import.meta.env.VITE_ROOT_FOLDER,
  nodeId: `${nodeId}`,
  newNodeName: '',
})

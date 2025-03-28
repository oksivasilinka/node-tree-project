import { CreateTreeNodeFormValues } from './validation-schema.ts'

export const createDefaultValues = (parentNodeId?: number): CreateTreeNodeFormValues => ({
  treeName: import.meta.env.VITE_ROOT_FOLDER,
  parentNodeId: `${parentNodeId}`,
  nodeName: '',
})

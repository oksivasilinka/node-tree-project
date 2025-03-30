import { RenameTreeNodeFormValues } from './validation-schema.ts'
import { ROOT_FOLDER } from '@/shared/constants'

export const createDefaultValues = (nodeId?: number): RenameTreeNodeFormValues => ({
  treeName: ROOT_FOLDER,
  nodeId: `${nodeId}`,
  newNodeName: '',
})

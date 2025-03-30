import { CreateTreeNodeFormValues } from './validation-schema.ts'
import { ROOT_FOLDER } from '@/shared/constants'

export const createDefaultValues = (parentNodeId?: number): CreateTreeNodeFormValues => ({
  treeName: ROOT_FOLDER,
  parentNodeId: `${parentNodeId}`,
  nodeName: '',
})

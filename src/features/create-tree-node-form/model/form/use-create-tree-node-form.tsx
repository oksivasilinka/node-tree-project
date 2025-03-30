import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { createDefaultValues } from './create-default-values.ts'

import { useCreateUserTreeNodeMutation } from '@/shared/api/user-tree-api'
import {
  CreateTreeNodeFormValues,
  useCreateTreeNodeFormValidationSchema,
} from './validation-schema.ts'

export type UseCreateTreeNodeFormProps = {
  parentId: number
  onClose?: () => void
}

export const useCreateTreeNodeForm = ({ onClose, parentId }: UseCreateTreeNodeFormProps) => {
  const [createTreeNode] = useCreateUserTreeNodeMutation()

  const validationSchema = useCreateTreeNodeFormValidationSchema()

  const form = useForm<CreateTreeNodeFormValues>({
    defaultValues: createDefaultValues(parentId),
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  })

  const {
    formState: { isValid, isLoading },
    reset,
    handleSubmit,
  } = form

  const onSubmit = () =>
    handleSubmit((data) => {
      createTreeNode({ ...data })
        .unwrap()
        .then(() => {
          reset()
          onClose?.()
        })
    })

  const onCancel = () => onClose?.()

  return {
    form,
    onSubmit,
    onCancel,
    isLoading,
    isValid,
  }
}

export type CreateTreeNodeFormReturnType = ReturnType<typeof useCreateTreeNodeForm>

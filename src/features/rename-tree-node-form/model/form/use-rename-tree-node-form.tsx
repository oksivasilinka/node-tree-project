import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { createDefaultValues } from './create-default-values.ts'

import { useRenameUserTreeNodeMutation } from '@/shared/api/user-tree-api'
import {
  RenameTreeNodeFormValues,
  useRenameTreeNodeFormValidationSchema,
} from './validation-schema.ts'
import { toast } from 'react-toastify'

export type UseRenameTreeNodeFormProps = {
  parentId: number
  onClose?: () => void
}

export const useRenameTreeNodeForm = ({ onClose, parentId }: UseRenameTreeNodeFormProps) => {
  const [renameTreeNode] = useRenameUserTreeNodeMutation()

  const validationSchema = useRenameTreeNodeFormValidationSchema()

  const form = useForm<RenameTreeNodeFormValues>({
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
      renameTreeNode({ ...data })
        .unwrap()
        .then(() => {
          reset()
          onClose?.()
        })
        .catch((err) => {
          toast.error(err?.data?.data?.message, { autoClose: 3000 })
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

export type RenameTreeNodeFormReturnType = ReturnType<typeof useRenameTreeNodeForm>

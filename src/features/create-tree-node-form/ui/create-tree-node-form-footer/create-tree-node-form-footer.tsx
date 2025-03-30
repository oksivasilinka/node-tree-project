import { Button } from '@/shared/ui'
import { CreateTreeNodeFormReturnType } from '@/features/create-tree-node-form/model/form'
import s from './create-tree-node-form-footer.module.scss'
import * as Dialog from '@radix-ui/react-dialog'

type CreateTreeNodeFormFooterProps = Omit<CreateTreeNodeFormReturnType, 'form'>

export const CreateTreeNodeFormFooter = ({
  onSubmit,
  isValid,
  isLoading,
  onCancel,
}: CreateTreeNodeFormFooterProps) => {
  return (
    <div className={s.footerForm}>
      <Dialog.Close
        asChild
        className={s.close}
      >
        <Button
          onClick={onCancel}
          variant={'outlined'}
        >
          Cancel
        </Button>
      </Dialog.Close>

      <Button
        disabled={!isValid || isLoading}
        onClick={onSubmit()}
      >
        Add
      </Button>
    </div>
  )
}

import { Button } from '@/shared/ui'
import s from './rename-tree-node-form-footer.module.scss'
import * as Dialog from '@radix-ui/react-dialog'
import { RenameTreeNodeFormReturnType } from '@/features/rename-tree-node-form/model/form'

type RenameTreeNodeFormFooterProps = Omit<RenameTreeNodeFormReturnType, 'form'>

export const RenameTreeNodeFormFooter = ({
  onSubmit,
  isValid,
  isLoading,
  onCancel,
}: RenameTreeNodeFormFooterProps) => {
  return (
    <div className={s.footerForm}>
      <Dialog.Close className={s.close}>
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
        Rename
      </Button>
    </div>
  )
}

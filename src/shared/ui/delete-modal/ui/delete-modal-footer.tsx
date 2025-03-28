import { Button } from '@/shared/ui'
import * as Dialog from '@radix-ui/react-dialog'
import s from './delete-modal-footer.module.scss'

type DeleteModalFooterProps = {
  titleSubmitButton: string
  onDelete?: () => void
  disabled?: boolean
}

export const DeleteModalFooter = ({
  titleSubmitButton,
  onDelete,
  disabled,
}: DeleteModalFooterProps) => {
  return (
    <div className={s.footerModal}>
      <Dialog.Close className={s.close}>
        <Button variant={'outlined'}>Cancel</Button>
      </Dialog.Close>

      <Button
        disabled={disabled}
        onClick={onDelete}
      >
        {titleSubmitButton}
      </Button>
    </div>
  )
}

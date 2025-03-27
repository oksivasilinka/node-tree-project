import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal-window.module.scss'

type ModalWindowProps = {
  children: ReactNode
  onOpenChange?: (open: boolean) => void
  open?: boolean
  trigger?: ReactNode
}
export const ModalWindow = ({ children, onOpenChange, open, trigger }: ModalWindowProps) => {
  return (
    <Dialog.Root
      onOpenChange={onOpenChange}
      open={open}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

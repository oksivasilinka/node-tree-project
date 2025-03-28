import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal-window.module.scss'

type ModalWindowProps = {
  children: ReactNode
  onOpenChange?: (open: boolean) => void
  open?: boolean
  trigger?: ReactNode
  title: string
}
export const ModalWindow = ({ children, onOpenChange, open, trigger, title }: ModalWindowProps) => {
  return (
    <Dialog.Root
      onOpenChange={onOpenChange}
      open={open}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <div className={s.header}>
            <Dialog.Title className={s.title}>{title}</Dialog.Title>
            <Dialog.Close className={s.close}>X</Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

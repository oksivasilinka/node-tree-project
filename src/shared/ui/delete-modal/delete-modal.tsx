import { ModalWindow, ModalWindowProps } from '@/shared/ui'
import { DeleteModalFooter } from './ui'
import { ReactNode } from 'react'

export type DeleteModalWindowProps = Omit<ModalWindowProps, 'children'> & {
  description: string
  onDelete: () => void
  disabled?: boolean
  titleSubmitButton: string
  trigger: ReactNode
}

export const DeleteModalWindow = ({
  title,
  description,
  titleSubmitButton,
  onDelete,
  disabled,
  trigger,
}: DeleteModalWindowProps) => {
  return (
    <ModalWindow
      trigger={trigger}
      title={title}
    >
      {description}
      <DeleteModalFooter
        disabled={disabled}
        onDelete={onDelete}
        titleSubmitButton={titleSubmitButton}
      />
    </ModalWindow>
  )
}

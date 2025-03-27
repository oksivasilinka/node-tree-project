import type { ReactNode } from 'react'

type ClickPreventedProps = {
  children: ReactNode
  className?: string
}

export const ClickPrevented = ({ children, className }: ClickPreventedProps) => {
  return (
    <div
      onDoubleClick={(event) => {
        event.stopPropagation()
      }}
      onClick={(event) => event.stopPropagation()}
      className={className}
    >
      {children}
    </div>
  )
}

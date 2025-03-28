import { ComponentPropsWithoutRef, RefObject } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  name?: string
  onClearClick?: () => void
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  ref,
  className,
  disabled,
  errorMessage,
  label,
  type,
  ...rest
}: InputProps & { ref?: RefObject<HTMLInputElement | null> }) => {
  const inputCN = clsx(s.textField, errorMessage && s.error, disabled && s.disabled)
  const inputWrapperCN = clsx(s.inputWrapper, errorMessage && s.error, className)
  const labelCN = clsx(s.label, disabled && s.disabled)

  return (
    <div className={s.container}>
      {label && <label className={labelCN}>{label}</label>}
      <div className={inputWrapperCN}>
        <input
          className={inputCN}
          disabled={disabled}
          ref={ref}
          type={type}
          {...rest}
        />
      </div>

      {errorMessage && <span className={s.error}>{errorMessage}</span>}
    </div>
  )
}

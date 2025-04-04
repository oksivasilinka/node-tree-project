import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  variant?: 'primary' | 'secondary' | 'outlined' | 'icon'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
) => {
  const { as: Component = 'button', className, variant = 'primary', ...rest } = props

  return (
    <Component
      className={`${s[variant]} ${className}`}
      {...rest}
    />
  )
}

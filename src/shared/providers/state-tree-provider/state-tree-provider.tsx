'use client'

import { useState, type ReactNode, useMemo } from 'react'

import { StateTreeContext } from '@/shared/providers'

type StateTreeProviderProps = {
  children: ReactNode
}

export const StateTreeProvider = ({ children }: StateTreeProviderProps) => {
  const [openIds, setOpenIds] = useState<number[]>([])

  const toggleOpenId = (id: number) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((openId) => openId !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const value = useMemo(
    () => ({
      openIds,
      toggleOpenId,
    }),
    [openIds],
  )
  return <StateTreeContext value={value}>{children}</StateTreeContext>
}

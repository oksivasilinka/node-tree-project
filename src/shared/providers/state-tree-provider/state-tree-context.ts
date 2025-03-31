import { createContext, use } from 'react'

type StateTreeContextValues = {
  openIds: number[] | null
  toggleOpenId: (id: number) => void
} | null

export const StateTreeContext = createContext<StateTreeContextValues>(null)

export const useStateTreeContext = () => {
  const context = use(StateTreeContext)

  if (!context) throw new Error('State Tree Context no exist')

  return context
}

'use client'

import { Team } from '@/data/types/teams'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CompareTeamContextType {
  items: Team[]
  addCompareTeam: (team: Team) => void
  removeCompareTeam: (teamId: number) => void
}

const CompareTeamContext = createContext({} as CompareTeamContextType)

export function CompareTeamProvider({ children }: { children: ReactNode }) {
  const [compareTeamItems, setCompareTeamItems] = useState<Team[]>([])

  function addCompareTeam(team: Team) {
    setCompareTeamItems((state) => {
      const currentState = state || []
      const teamInCompare = state && state.some((item) => item.id === team.id)

      let updatedState

      if (teamInCompare) {
        updatedState = currentState.map((item) =>
          item.id === team.id ? team : item,
        )
      } else {
        updatedState = [...currentState, team]
      }

      localStorage.setItem('teams', JSON.stringify(updatedState))
      return updatedState
    })
  }

  useEffect(() => {
    const storedItems =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('teams') || 'null')
        : null
    setCompareTeamItems(storedItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function removeCompareTeam(teamId: number) {
    setCompareTeamItems((state) => {
      const currentState = state || []
      const updatedState = currentState.filter((item) => item.id !== teamId)

      localStorage.setItem('teams', JSON.stringify(updatedState))
      return updatedState
    })
  }

  return (
    <CompareTeamContext.Provider
      value={{
        items: compareTeamItems,
        addCompareTeam,
        removeCompareTeam,
      }}
    >
      {children}
    </CompareTeamContext.Provider>
  )
}

export const useCompareTeams = () => useContext(CompareTeamContext)

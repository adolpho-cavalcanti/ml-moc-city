'use client'

import { useCompareTeams } from '@/contexts/compare-team-context'
import { Team } from '@/data/types/teams'

export interface AddToCompareTeamsButtonProps {
  team: Team
}

export function AddToCompareTeamsButton({
  team,
}: AddToCompareTeamsButtonProps) {
  const { addCompareTeam } = useCompareTeams()

  function handleAddTeamToCompare() {
    addCompareTeam(team)
  }
  return (
    <>
      {team.titulos.length > 0 && (
        <button
          type="button"
          onClick={handleAddTeamToCompare}
          className="min-w-[180px] min-h-[80px] mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao Guia de Comparação
        </button>
      )}
    </>
  )
}

'use client'

import { useCompareTeams } from '@/contexts/compare-team-context'
import { Team } from '@/data/types/teams'
import { somarPontos } from '@/functions/somar-pontos'
import { Trash } from 'lucide-react'
import Image from 'next/image'

export interface AddToCompareTeamsButtonProps {
  teams: Team[]
}

export function CardCompare({ teams }: AddToCompareTeamsButtonProps) {
  const { removeCompareTeam } = useCompareTeams()

  function handleRemoveTeamToCompare(team: Team) {
    removeCompareTeam(team.id)
  }

  return (
    <>
      {teams?.map((team: Team) => {
        return (
          <div
            key={team.id}
            className="flex flex-col items-center gap-2 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] py-4 min-h-[680px] "
          >
            <button
              className="self-end mr-2"
              onClick={() => handleRemoveTeamToCompare(team)}
            >
              <Trash className="h-8 w-8 text-red-700" />
            </button>
            <Image
              src={team.imagem}
              className="group-hover:scale-105 transition-transform duration-500"
              width={180}
              height={180}
              quality={100}
              alt=""
            />
            <div className="flex flex-col justify-center items-center overflow-hidden w-full">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-center">
                      Campeonato
                    </th>
                    <th className="py-2 px-4 border-b text-center">Títulos</th>
                    <th className="py-2 px-4 border-b text-center">
                      Pontos por Título
                    </th>
                    <th className="py-2 px-4 border-b text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {team.titulos?.map((titulo) => {
                    return (
                      <tr key={titulo.id}>
                        <td className="py-2 px-4 border-b text-center">
                          {titulo.nome}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {titulo.qtdTitulos}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {titulo.peso}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {titulo.peso * titulo.qtdTitulos}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-center">
                      Soma Total de Pontos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">
                      {somarPontos(team)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </>
  )
}

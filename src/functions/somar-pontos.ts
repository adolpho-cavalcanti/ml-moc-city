import { Team } from '@/data/types/teams'

export function somarPontos(team: Team) {
  const pointsForChampionship = team.titulos.reduce((total, titulo) => {
    // eslint-disable-next-line prettier/prettier
    return total + (titulo.peso * titulo.qtdTitulos)
  }, 0)

  return pointsForChampionship
}

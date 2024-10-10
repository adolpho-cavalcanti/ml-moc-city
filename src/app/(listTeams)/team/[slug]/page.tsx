import Image from 'next/image'
import { Metadata } from 'next'
import { Team } from '@/data/types/teams'
import { AddToCompareTeamsButton } from '@/components/add-to-compare-teams-button'
import { renderizarTitulos } from '@/functions/renderizar-titulos'

interface TeamSlugProps {
  params: {
    slug: string
  }
}

async function getTeamBySlug(slug: string): Promise<Team | undefined> {
  const teams: Team[] = [
    {
      "id": 1,
      "slug": "adolpho",
      "nome": "Adolpho",
      "imagem": "/times/dolph.jpg",
      "nacionalidade": {
        "nome": "Brasil",
        "bandeira": "/bandeiras/brasil.png"
      },
      "titulos": [
        {
          "id": 1,
          "nome": "Copa do Mundo",
          "imagem": "/trofeus/copa-do-mundo.png",
          "peso": 50,
          "qtdTitulos": 1
        },
        {
          "id": 2,
          "nome": "Champions League",
          "imagem": "/trofeus/champions.png",
          "peso": 30,
          "qtdTitulos": 1
        },
        {
          "id": 3,
          "nome": "Premier League",
          "imagem": "/trofeus/premier-league.png",
          "peso": 20,
          "qtdTitulos": 2
        }
      ]
    },
    {
      "id": 2,
      "slug": "nil",
      "nome": "Nil",
      "imagem": "/times/nil.jpg",
      "nacionalidade": {
        "nome": "Brasil",
        "bandeira": "/bandeiras/brasil.png"
      },
      "titulos": [
        {
          "id": 1,
          "nome": "Champions League",
          "imagem": "/trofeus/champions.png",
          "peso": 30,
          "qtdTitulos": 1
        },
        {
          "id": 2,
          "nome": "Copa da Liga",
          "imagem": "/trofeus/fa-cup.png",
          "peso": 15,
          "qtdTitulos": 2
        }
      ]
    },
    {
      "id": 3,
      "slug": "dimitrius",
      "nome": "Dimi",
      "imagem": "/times/dimi.jpg",
      "nacionalidade": {
        "nome": "Brasil",
        "bandeira": "/bandeiras/brasil.png"
      },
      "titulos": [
        {
          "id": 1,
          "nome": "Premier League",
          "imagem": "/trofeus/premier-league.png",
          "peso": 20,
          "qtdTitulos": 1
        },
        {
          "id": 2,
          "nome": "Copa da Liga",
          "imagem": "/trofeus/fa-cup.png",
          "peso": 15,
          "qtdTitulos": 1
        }
      ]
    },
    {
      "id": 4,
      "slug": "jijio",
      "nome": "Jijio",
      "imagem": "/times/jijio.jpg",
      "nacionalidade": {
        "nome": "Brasil",
        "bandeira": "/bandeiras/brasil.png"
      },
      "titulos": [
      ]
    },
    {
      "id": 5,
      "slug": "bau",
      "nome": "Bau",
      "imagem": "/times/bau.jpg",
      "nacionalidade": {
        "nome": "Brasil",
        "bandeira": "/bandeiras/brasil.png"
      },
      "titulos": [
      ]
    }
  ]

  const team = teams.find((team) => team.slug === slug)
  return team
}

export async function generateMetadata({
  params,
}: TeamSlugProps): Promise<Metadata> {
  const team = await getTeamBySlug(params.slug)

  return {
    title: team ? team.nome : 'Team Not Found',
  }
}

export default async function TeamPage({ params }: TeamSlugProps) {
  const team = await getTeamBySlug(params.slug)

  if (!team) {
    return <div>Time não encontrado</div>
  }
  return (
    <div className="bg-[#000] rounded-lg p-2 relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-1 overflow-hidden flex justify-center items-center">
        <Image
          src={team.imagem}
          alt={team.nome}
          width={500}
          height={500}
          quality={100}
        />
      </div>

      <div className="col-span-2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold leading-tight text-white ml-2">{team.nome}</h1>

        <div className="mt-8 flex flex-col items-center gap-1">
          {renderizarTitulos(team)}
        </div>

        <AddToCompareTeamsButton team={team} />
      </div>
    </div>
  )
}

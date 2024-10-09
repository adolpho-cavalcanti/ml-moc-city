import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Team } from '@/data/types/teams'
import Champions from '@/components/champions'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchTeams(query: string): Promise<Team[]> {
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
          "qtdTitulos": 1
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

  const filteredTeams = teams.filter(team =>
    team.nome.toLowerCase().includes(query.toLowerCase())
  )

  return filteredTeams
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  // Redireciona para a página inicial se a query estiver vazia
  if (!query) {
    redirect('/')
  }

  // Busca os times usando a função searchTeams
  const teams = await searchTeams(query)
  
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-9 gap-6">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      {teams?.map((team: Team) => {
        return (
          <Link
            key={team.id}
            href={`/team/${team.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
          >
            <Image
              src={team.imagem}
              className="group-hover:scale-105 transition-transform duration-500"
              width={180}
              height={180}
              quality={100}
              alt={team.nome}
            />

            <Champions champions={team.titulos} />

            <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 p-1">
              <span className="flex h-full items-center justify-center rounded-full bg-emerald-600 text-white px-4 font-semibold">
                Veja mais
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

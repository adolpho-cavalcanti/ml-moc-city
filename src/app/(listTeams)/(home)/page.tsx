import Champions from '@/components/champions'
import { Team } from '@/data/types/teams'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

async function getAllTeams(): Promise<Team[]> {
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
  
  return teams
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const teams = await getAllTeams()

  return (
    <div className="cards max-h-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
      {teams.map((team: Team) => {
        return (
          <Link
            key={team.id}
            href={`/team/${team.slug}`}
            className="group relative rounded-lg bg-[#000000] min-w-[280px] min-h-[300px] overflow-hidden flex justify-center items-center"
          >
            <Image
              src={team.imagem}
              className="group-hover:scale-105 transition-transform duration-500 rounded-full object-cover"
              width={120}
              height={120}
              quality={100}
              alt=""
              style={{ width: '120px', height: '120px' }}
            />

            <Champions champions={team.titulos} />

            <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 p-1">
              <span className="flex h-full items-center justify-center rounded-full bg-emerald-600 text-white px-4 font-semibold">
                Veja mais
              </span>
            </div>

            <div className="absolute right-[-60px] top-[-30px] w-[150px] h-[150px] bg-yellow-500 rounded-full"></div>
          </Link>
        )
      })}
    </div>
  )
}

import { ImageResponse } from 'next/og'
import { Team } from '@/data/types/teams'

export const runtime = 'edge'

export const alt = ''

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

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

  const team = teams.find((team) => team.slug === slug)
  return team
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  // Busca o time pelo slug
  const team = await getTeamBySlug(params.slug)

  // Se o time não for encontrado, você pode definir um comportamento de fallback
  if (!team) {
    return new ImageResponse(
      <div
        style={{
          background: '#F2F2F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Team not found</p>
      </div>,
      {
        ...size,
      }
    )
  }

  // Como as imagens estão na pasta public, use o caminho relativo
  const teamImageURL = `/images/${team.imagem}`

  // Retorna a imagem personalizada do time
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F2F2F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={teamImageURL}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

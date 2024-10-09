import { Team } from '@/data/types/teams'
import Image from 'next/image'

export const renderizarTitulos = (team: Team) => {
  const rows: JSX.Element[] = []
  let increment = 0

  team.titulos.forEach((titulo) => {
    for (let i = 1; i <= titulo.qtdTitulos; i++) {
      increment++
      rows.push(
        <div key={increment} className='flex flex-col items-center justify-center'>
          <Image
            src={titulo.imagem}
            className="group-hover:scale-105 transition-transform duration-500 rounded-md"
            width={80}
            height={80}
            quality={100}
            alt={titulo.nome}
            style={{ width: '80px', height: '80px' }}
          />
          <p className='text-white'>{titulo.nome}</p>
        </div>,
      )
    }
  })

  return rows
}

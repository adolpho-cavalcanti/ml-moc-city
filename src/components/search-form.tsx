'use client'

import { Search } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Team {
  nome: string
  slug: string
  imagem: string
}

export function SearchForm() {
  const router = useRouter()
  const [results, setResults] = useState<Team[]>([])
  
  // Função para buscar times no arquivo JSON
  async function searchTeams(query: string) {
    // Carregar o arquivo JSON com fetch
    const response = await fetch('/teams.json')
    const teams: Team[] = await response.json()
    
    // Filtrar os times com base na query
    return teams.filter(team =>
      team.nome.toLowerCase().includes(query.toLowerCase())
    )
  }

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.q as string

    if (!query) {
      return
    }

    // Chamar a função de busca e obter os resultados
    const searchResults = await searchTeams(query)
    setResults(searchResults)

    // Redirecionar se houver apenas um resultado
    if (searchResults.length === 1) {
      router.push(`/team/${searchResults[0].slug}`)
    }
  }

  return (
      <form
        onSubmit={handleSearch}
        className="flex w-[320px] items-center gap-3 rounded-full bg-[#c2c2c2] px-5 py-3 ring-zinc-700"
      >
        <Search className="w-5 h-5 text-[#f2f2f2]" />

        <input
          name="q"
          placeholder="Buscar times..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#333333]"
          required
        />
      </form>
  )
}

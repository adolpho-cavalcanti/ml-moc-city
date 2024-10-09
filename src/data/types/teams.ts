export interface Team {
  id: number
  slug: string
  nome: string
  imagem: string
  nacionalidade: {
    nome: string
    bandeira: string
  }
  titulos: {
    id: number
    nome: string
    imagem: string
    peso: number
    qtdTitulos: number
  }[]
}

import { ReactNode } from 'react'
import Header from '../../components/header'
import { CompareTeamProvider } from '../../contexts/compare-team-context'

export default function ListTeamsLayout({ children }: { children: ReactNode }) {
  return (
    <CompareTeamProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 md:p-8 lg:p-8 sm:p-1">
        <Header />
        {children}
      </div>
    </CompareTeamProvider>
  )
}

import Link from 'next/link'
import { CompareTeamsWidget } from './compare-teams-widget'
import { SearchForm } from './search-form'

export default function Header() {
  return (
    <div className="cards max-h-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8 items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold">
          ML Moc
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CompareTeamsWidget />
      </div>
    </div>
  )
}

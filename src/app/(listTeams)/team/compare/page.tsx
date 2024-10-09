'use client'

import { CardCompare } from '@/components/card-compare'
import { useCompareTeams } from '@/contexts/compare-team-context'

export default function ComparePage() {
  const { items } = useCompareTeams()
  return (
    <div className="cards max-h-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 row-span-9 gap-8 mt-8">
      <CardCompare teams={items} />
    </div>
  )
}

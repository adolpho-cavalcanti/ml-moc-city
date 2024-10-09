'use client'

import { useCompareTeams } from '@/contexts/compare-team-context'
import { Trophy, X } from 'lucide-react'
import Link from 'next/link'

export function CompareTeamsWidget() {
  const { items } = useCompareTeams()
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Trophy className="h-8 w-8 text-red-700" />
        <X className="h-4 w-4" />
        <Trophy className="h-8 w-8 text-green-700" />
        {items && (
          <Link href="/team/compare">
            <span className="text-sm">Compare ({items.length})</span>
          </Link>
        )}
      </div>
    </div>
  )
}

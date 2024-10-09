import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  const renderSkeletons = Array.from({ length: 6 }, (_, index) => (
    <Skeleton
      key={index}
      className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-[#333] bg-[#333] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
    />
  ))

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-9 gap-6">
      {renderSkeletons}
    </div>
  )
}

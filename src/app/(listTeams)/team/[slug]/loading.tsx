import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  const renderSkeletons = Array.from({ length: 6 }, (_, index) => (
    <Skeleton
      key={index}
      className="rounded-lg mt-12 p-12 relative grid max-h-[860px] grid-cols-3 bg-[#333] justify-center items-end"
    />
  ))

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-9 gap-6">
      {renderSkeletons}
    </div>
  )
}

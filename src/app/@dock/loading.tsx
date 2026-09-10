import { Skeleton } from 'rsc-daisyui'

export default function DockLoading() {
  return (
    <div className='flex items-center justify-around py-0.75'>
      {Array(3)
        .fill(null)
        .map(() => (
          <Skeleton className='size-14 shrink-0 rounded-full' key={crypto.randomUUID()} />
        ))}
    </div>
  )
}

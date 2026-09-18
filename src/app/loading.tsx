import { Loading } from 'rsc-daisyui'

export default function RootLoading() {
  return (
    <div className='flex grow items-center justify-center'>
      <Loading className='size-16 lg:size-20' color='accent' variant='ring' />
    </div>
  )
}

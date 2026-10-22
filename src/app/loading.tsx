import { Loading } from 'rsc-daisyui'

export default function RootLoading() {
  return (
    <div className='-translate-1/2 absolute top-1/2 left-1/2'>
      <Loading className='size-16 lg:size-20' color='accent' variant='ring' />
    </div>
  )
}

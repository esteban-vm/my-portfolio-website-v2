import localFont from 'next/font/local'

export const Montserrat = localFont({
  variable: '--montserrat-alternates',
  src: [
    { path: '../../public/fonts/montserrat-alternates-regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/montserrat-alternates-semibold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/montserrat-alternates-bold.ttf', weight: '700', style: 'normal' },
  ],
})

export const Geist = localFont({
  src: '../../public/fonts/geist-variable.ttf',
  variable: '--geist-variable',
})

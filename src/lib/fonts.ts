import localFont from 'next/font/local'

export const balsamiq = localFont({
  variable: '--balsamiq',
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    { path: '../../public/fonts/Balsamiq-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Balsamiq-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Balsamiq-bold.woff2', weight: '700', style: 'bold' },
  ],
})

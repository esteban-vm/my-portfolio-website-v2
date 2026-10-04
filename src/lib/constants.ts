import type { ThemeTypeWithDefault as Theme } from 'rsc-daisyui'
import type { CertificateCardProps } from '@/components/about'

// i18n
export const LOCALES = ['en', 'es'] as const
export const LOCALE_COOKIE = 'NEXT_LOCALE'

// theming
export const THEME_COOKIE = 'NEXT_THEME'
export const THEMES = ['light', 'dark'] as const satisfies string[]

export const THEME_MAP = {
  light: 'emerald',
  dark: 'synthwave',
} as const satisfies Record<(typeof THEMES)[number], Theme>

// EmailJS
export const {
  EMAILJS_SERVICE_ID: SERVICE_ID,
  EMAILJS_TEMPLATE_ID: TEMPLATE_ID,
  EMAILJS_TO_NAME: NAME,
  EMAILJS_TO_EMAIL: EMAIL,
  EMAILJS_PUBLIC_KEY: PUBLIC_KEY,
  EMAILJS_PRIVATE_KEY: PRIVATE_KEY,
} = process.env

export const INPUT_LENGTHS = {
  nameMin: 5,
  nameMax: 50,
  messageMin: 5,
  messageMax: 255,
} as const

export const CERTIFICATES: CertificateCardProps[] = [
  {
    entity: 'Udemy',
    imageSrc: '/images/UC-c79ef04a-fec5-45b3-aac6-36cc432a958b.webp',
    link: 'https://ude.my/UC-c79ef04a-fec5-45b3-aac6-36cc432a958b',
    tags: ['Next.js', 'TypeScript', 'React'],
    title: 'Next.js: El framework de React para producción',
  },
]

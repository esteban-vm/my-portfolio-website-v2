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
  {
    entity: 'Udemy',
    imageSrc: '/images/UC-7f066a38-9094-4fa9-a518-36c4bbe55c87.webp',
    link: 'https://ude.my/UC-7f066a38-9094-4fa9-a518-36c4bbe55c87',
    tags: ['Next.js', 'TypeScript', 'React'],
    title: 'Next JS Course: Build a Complete YouTube Clone Web Project',
  },
  {
    entity: 'Udemy',
    imageSrc: '/images/UC-48c39688-58a9-4c8d-b386-991a915ce283.webp',
    link: 'https://ude.my/UC-48c39688-58a9-4c8d-b386-991a915ce283',
    tags: ['TailwindCSS', 'TypeScript', 'React'],
    title: 'Build Instagram clone - React TailwindCSS Firebase',
  },
  {
    entity: 'Udemy',
    imageSrc: '/images/UC-9f8f405b-f8cd-4f76-9dc4-c2bb102a2e88.webp',
    link: 'https://ude.my/UC-9f8f405b-f8cd-4f76-9dc4-c2bb102a2e88',
    tags: ['TailwindCSS', 'TypeScript', 'React'],
    title: 'Master Frontend Next JS 14 I Clon de Netflix desde cero',
  },
]

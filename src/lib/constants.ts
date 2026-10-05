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
    tags: ['TailwindCSS', 'TypeScript', 'Next.js'],
    title: 'Master Frontend Next JS 14 I Clon de Netflix desde cero',
  },
  {
    entity: 'Alura Latam',
    imageSrc: '/images/9533f12a-4475-455c-b7b4-86c7f507b578.webp',
    link: 'https://app.aluracursos.com/degree/certificate/9533f12a-4475-455c-b7b4-86c7f507b578?lang',
    tags: ['Java', 'Spring Boot'],
    title: 'Formación Java Web: crea aplicaciones utilizando Spring Boot',
  },
  {
    entity: 'Alura Latam',
    imageSrc: '/images/fe5f8f4d-6552-4eee-b33c-2239dc138ffd.webp',
    link: 'https://app.aluracursos.com/degree/certificate/fe5f8f4d-6552-4eee-b33c-2239dc138ffd?lang',
    tags: ['Java', 'Spring Boot'],
    title: 'Formación Java y Spring Boot',
  },
  {
    entity: 'Alura Latam',
    imageSrc: '/images/3b5e233a-648c-4d3e-a1ad-6c39639fa332.webp',
    link: 'https://app.aluracursos.com/degree/certificate/3b5e233a-648c-4d3e-a1ad-6c39639fa332?lang',
    tags: ['Java', 'POO'],
    title: 'Formación Java Orientado a Objetos G8 - ONE',
  },
  {
    entity: 'Alura Latam',
    imageSrc: '/images/05c435ac-4f80-42a4-8dc8-51bded3c74b3.webp',
    link: 'https://app.aluracursos.com/degree/certificate/05c435ac-4f80-42a4-8dc8-51bded3c74b3?lang',
    tags: ['Java', 'Spring Boot', 'IA'],
    title: 'Formación Inteligencia Artificial y Java G8 - ONE',
  },
  {
    entity: 'Alura Latam',
    imageSrc: '/images/af88a810-9c0b-48bf-a9c1-ac8574f71017.webp',
    link: 'https://app.aluracursos.com/certificate/af88a810-9c0b-48bf-a9c1-ac8574f71017?lang',
    tags: ['Git', 'GitHub'],
    title: 'Git y GitHub: repositorio, commit y versiones',
  },
  {
    entity: 'Alura Latam',
    imageSrc: '/images/b1be1caa-197e-4ce2-82a0-b2f48c65d357.webp',
    link: 'https://app.aluracursos.com/degree/certificate/b1be1caa-197e-4ce2-82a0-b2f48c65d357?lang',
    tags: ['Docker'],
    title: 'Formación Nivelación Docker - Alura Boost',
  },
]

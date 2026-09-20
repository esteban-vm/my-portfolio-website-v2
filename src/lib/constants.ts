import type { ThemeTypeWithDefault as Theme } from 'rsc-daisyui'

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
  EMAILJS_TO_NAME: TO_NAME,
  EMAILJS_TO_EMAIL: TO_EMAIL,
  EMAILJS_PUBLIC_KEY: PUBLIC_KEY,
  EMAILJS_PRIVATE_KEY: PRIVATE_KEY,
} = process.env

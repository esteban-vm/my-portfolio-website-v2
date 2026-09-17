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

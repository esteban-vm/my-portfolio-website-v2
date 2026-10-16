'use server'

import type { AxiosResponse } from 'axios'
import type { WeatherError, WeatherResponse } from '@/types/weather'
import { cache } from 'react'
import z from 'zod'
import { getInstance } from '@/lib/api'
import { LOCALES } from '@/lib/constants'
import { safeClient } from '@/lib/safe-action'

export const getWeather = safeClient.inputSchema(z.object({ lang: z.enum(LOCALES) })).action(
  cache(async ({ parsedInput }) => {
    const instance = getInstance()
    const controller = new AbortController()

    const { data } = await instance.request<WeatherResponse, AxiosResponse<WeatherResponse, WeatherError>>({
      method: 'GET',
      signal: controller.signal,
      params: { lang: parsedInput.lang },
    })

    return data
  })
)

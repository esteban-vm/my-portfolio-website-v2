'use client'

import { useLocale } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { useEffect, useState } from 'react'
import { Stats } from 'rsc-daisyui'
import { getWeather } from '@/actions'

export function InfoStats() {
  const locale = useLocale()
  const [time, setTime] = useState('')
  const { execute, result, isPending } = useAction(getWeather)

  useEffect(() => {
    execute({ lang: locale })
  }, [execute, locale])

  useEffect(() => {
    if (!result?.data) return

    const dateTimeFormat = new Intl.DateTimeFormat(locale, {
      timeZone: result.data.location.tz_id,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const updateTime = () => setTime(dateTimeFormat.format(new Date()))

    updateTime()
    const interval = setInterval(updateTime, 1_000)
    return () => clearInterval(interval)
  }, [result?.data, locale])

  if (isPending || !result?.data) return null

  const { temp_c } = result.data.current
  const { text } = result.data.current.condition
  const { name, country } = result.data.location

  return (
    <Stats className='md:stats-horizontal text-center' vertical>
      <Stats.Stat
        className='px-3 py-2'
        desc={`${temp_c} °C · ${text}`}
        title={`${locale === 'es' ? 'Asunción' : name}, ${country}`}
        value={
          <time className='font-semibold' dateTime={time}>
            {time}
          </time>
        }
      />
    </Stats>
  )
}

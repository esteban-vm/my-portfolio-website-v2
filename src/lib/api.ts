import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const getInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.WEATHER_API_URL,
    params: {
      key: process.env.WEATHER_API_KEY,
      q: process.env.WEATHER_API_CITY,
    },
  })
}

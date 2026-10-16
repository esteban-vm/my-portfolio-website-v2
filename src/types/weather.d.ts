export interface WeatherResponse {
  location: CityLocation
  current: CurrentWeather
}

export interface CityLocation {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface CurrentWeather {
  temp_c: number
  condition: WeatherCondition
  will_it_rain: number
  chance_of_rain: number
  will_it_snow: number
  chance_of_snow: number
}

export interface WeatherCondition {
  text: string
  icon: string
}

export interface WeatherError {
  message: string
  code: string
}

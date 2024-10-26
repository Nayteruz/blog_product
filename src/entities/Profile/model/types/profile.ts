import { Country, Currency } from '@/shared/const/common';

export interface IProfile {
  first: string
  lastname: string
  age: number
  currency: typeof Currency[keyof typeof Currency]
  country: typeof Country[keyof typeof Country]
  city: string
  username: string
  avatar: URL
}

export interface IProfileSchema {
  data?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}

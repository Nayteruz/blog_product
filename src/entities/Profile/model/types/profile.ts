import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export const ValidateProfileError = {
  INCORRECT_DATA: 'INCORRECT_DATA',
  INCORRECT_USERNAME: 'INCORRECT_USERNAME',
  INCORRECT_AGE: 'INCORRECT_AGE',
  INCORRECT_CURRENCY: 'INCORRECT_CURRENCY',
  INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
  NO_DATA: 'NO_DATA',
  SERVER_ERROR: 'SERVER_ERROR',
} as const;

export type TValidateProfileError = (typeof ValidateProfileError)[keyof typeof ValidateProfileError];

export interface IProfile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: (typeof Currency)[keyof typeof Currency];
  country?: (typeof Country)[keyof typeof Country];
  city?: string;
  username?: string;
  /**
   * URL to the user's avatar image.
   */
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: TValidateProfileError[];
}

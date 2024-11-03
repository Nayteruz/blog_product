import { IProfile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: IProfile) => {
  const {
    first, lastname, age, country,
  } = profile || {};

  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const errors: (typeof ValidateProfileError)[keyof typeof ValidateProfileError][] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};

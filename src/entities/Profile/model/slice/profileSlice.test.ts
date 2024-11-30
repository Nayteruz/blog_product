import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfile, IProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data: IProfile = {
  username: '123',
  age: 32,
  country: 'Russia',
  lastname: 'Nayter',
  first: 'Alex',
  city: 'Moscow',
  currency: 'USD',
  id: '1',
};

describe('profileSlice', () => {
  test('set readonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(profileReducer(state as IProfileSchema, profileActions.setReadOnly(true))).toStrictEqual(
      { readonly: true },
    );
  });

  test('update profile', () => {
    const state: DeepPartial<IProfileSchema> = { form: { age: 30 } };
    expect(
      profileReducer(state as IProfileSchema, profileActions.updateProfile({ age: 32 })),
    ).toStrictEqual({ form: { age: 32 } });
  });

  test('cancel edit', () => {
    const state: DeepPartial<IProfileSchema> = {
      readonly: false,
      data: { age: 30 },
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).toStrictEqual({
      readonly: true,
      data: { age: 30 },
      form: { age: 30 },
      validateErrors: undefined,
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(state as IProfileSchema, updateProfileData.pending)).toStrictEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fullfilled', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
      readonly: false,
    };
    expect(
      profileReducer(state as IProfileSchema, updateProfileData.fulfilled(data, '')),
    ).toStrictEqual({
      isLoading: false,
      readonly: true,
      data,
      form: data,
      validateErrors: undefined,
    });
  });
});

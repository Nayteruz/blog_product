export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
// export { getUserAuthDataIsLoading } from './model/selectors/getUserAuthDataIsLoading/getUserAuthDataIsLoading';
// export { getUserAuthDataError } from './model/selectors/getUserAuthDataError/getUserAuthDataError';

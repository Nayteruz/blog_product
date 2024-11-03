import { StateSchema } from '@/app/providers/StoryProvider';

export const getProfileValidateError = (state: StateSchema) => state?.profile?.validateErrors;

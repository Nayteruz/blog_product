import { StateSchema } from '@/app/providers/StoryProvider';

export const getProfileReadOnly = (state: StateSchema) => state?.profile?.readonly;

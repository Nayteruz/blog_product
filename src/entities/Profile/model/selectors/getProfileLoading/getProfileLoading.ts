import { StateSchema } from '@/app/providers/StoryProvider';

export const getProfileLoading = (state: StateSchema) => state?.profile?.isLoading;

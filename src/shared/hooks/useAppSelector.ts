import { useSelector } from 'react-redux';
import { AppSelector } from '@/app/providers/StoryProvider';

export const useAppSelector: AppSelector = useSelector;

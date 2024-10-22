import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StoreProvider/ui/StoreProvider';

export const useAppDispatch: () => AppDispatch = useDispatch;

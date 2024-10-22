import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { DeepPartial } from '@/shared/lib';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

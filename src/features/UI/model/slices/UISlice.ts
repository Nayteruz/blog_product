import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUISchema } from '../types/UISchema';

const initialState: IUISchema = { scroll: {} };

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: uiSliceActions } = uiSlice;
export const { reducer: uiSliceReducer } = uiSlice;

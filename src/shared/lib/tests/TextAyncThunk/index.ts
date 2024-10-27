import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { StateSchema, ThunkConfig } from '@/app/providers/StoryProvider';

type ActionCreatorType<ReturnValue, Arg, RejectValue> = (
  arg: Arg,
) => AsyncThunkAction<ReturnValue, Arg, { rejectValue: RejectValue }>;

export function createTestAsyncThunk<Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
) {
  const dispatch = jest.fn();
  const getState = jest.fn<StateSchema, []>();

  const extra: ThunkConfig<RejectedValue>['extra'] = {
    api: axios as jest.Mocked<typeof axios>,
  };

  const callThunk = async (arg: Arg) => {
    const action = actionCreator(arg);
    const result = await action(dispatch, getState, extra);
    return result;
  };

  return {
    callThunk,
    dispatch,
    getState,
  };
}

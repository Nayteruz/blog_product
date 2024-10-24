import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

// type ActionCreatorType<
//   ReturnValue,
//   Arg,
//   RejectValue
// > = (arg: Arg) => AsyncThunkAction<ReturnValue, Arg, { rejectValue: RejectValue }>;

// export class TestAsyncThunk<Return, Arg, RejectedValue> {
//   dispatch: jest.MockedFn<any>;

//   getState: () => StateSchema;

//   constructor(private actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
//     this.dispatch = jest.fn();
//     this.getState = jest.fn();
//     this.actionCreator = actionCreator;
//   }

//   async callThunk(arg: Arg) {
//     const action = this.actionCreator(arg);
//     const result = await action(this.dispatch, this.getState, undefined);

//     return result;
//   }
// }

type ActionCreatorType<ReturnValue, Arg, RejectValue> = (
  arg: Arg,
) => AsyncThunkAction<ReturnValue, Arg, { rejectValue: RejectValue }>;

export function createTestAsyncThunk<Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
) {
  const dispatch = jest.fn();
  const getState = jest.fn<StateSchema, []>();

  const callThunk = async (arg: Arg) => {
    const action = actionCreator(arg);
    const result = await action(dispatch, getState, undefined);
    return result;
  };

  return {
    callThunk,
    dispatch,
    getState,
  };
}

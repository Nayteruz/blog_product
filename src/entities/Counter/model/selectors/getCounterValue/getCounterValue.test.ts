import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';
import { DeepPartial } from '@/shared/lib';

describe('getCounterValue', () => {
  test('should return initial state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});

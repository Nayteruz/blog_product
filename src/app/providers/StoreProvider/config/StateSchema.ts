import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { ILoginSchema } from '@/features/AuthByUserName';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm?: ILoginSchema
}

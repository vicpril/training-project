import { EnhancedStore } from '@reduxjs/toolkit'
import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/AuthByUsername'
import { createReducerManager } from './reducerManager'

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // асинзпронные
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export type ReducerManager = ReturnType<typeof createReducerManager>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

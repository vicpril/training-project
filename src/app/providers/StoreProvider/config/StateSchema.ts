import { configureStore } from '@reduxjs/toolkit'
import type { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/AuthByUsername'
import { createReducerManager } from './reducerManager'
import { createReduxStore } from './store'

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // асинзпронные
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export type ReducerManager = ReturnType<typeof createReducerManager>

type ReduxStoreType = ReturnType<typeof configureStore<StateSchema>>

export interface ReduxStoreWithManager extends ReduxStoreType {
  reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

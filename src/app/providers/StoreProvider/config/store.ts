import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
import type { StateSchema } from './StateSchema'

const reducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer,
}

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer,
  preloadedState: initialState,
  devTools: __IS_DEV__,
})

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { StateSchema } from './StateSchema'

const reducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
}

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer,
  preloadedState: initialState,
  devTools: __IS_DEV__,
})

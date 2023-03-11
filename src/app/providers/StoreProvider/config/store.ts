import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { NavigateFunction } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import type { StateSchema, ThunkExtraArgs } from './StateSchema'

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArgs = {
    api: $api,
    navigate,
  }

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { NavigateFunction } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import type { ReduxStoreWithManager, StateSchema } from './StateSchema'

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

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  }) as ReduxStoreWithManager

  store.reducerManager = reducerManager

  return store
}

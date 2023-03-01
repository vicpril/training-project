import { createAsyncThunk } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import axios from 'axios'
import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
  username: string,
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { state: StateSchema, rejectValue: string }
>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login/', authData)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      // console.warn('🚀 ~ error', error)
      return thunkAPI.rejectWithValue('error')
    }
  },
  {
    condition: (_, { getState }) => getState()?.loginForm?.isLoading !== true,
  },
)

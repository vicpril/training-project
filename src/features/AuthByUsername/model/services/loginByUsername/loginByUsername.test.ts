import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const remoteMockValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: remoteMockValue }))
    // const action = loginByUsername({ username: '123', password: '123' })
    // const result = await action(dispatch, getState, undefined)

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(remoteMockValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.payload).toEqual(remoteMockValue)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    // const action = loginByUsername({ username: '123', password: '123' })
    // const result = await action(dispatch, getState, undefined)

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.payload).toEqual('error')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})

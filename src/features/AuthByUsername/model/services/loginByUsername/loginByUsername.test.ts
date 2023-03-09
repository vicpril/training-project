// import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const remoteMockValue = { username: '123', id: '1' }
    // mockedAxios.post.mockReturnValue(Promise.resolve({ data: remoteMockValue }))
    // const action = loginByUsername({ username: '123', password: '123' })
    // const result = await action(dispatch, getState, undefined)

    const thunk = new TestAsyncThunk(loginByUsername, { data: remoteMockValue })
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(remoteMockValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.payload).toEqual(remoteMockValue)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('error login', async () => {
    // mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    // const action = loginByUsername({ username: '123', password: '123' })
    // const result = await action(dispatch, getState, undefined)

    const thunk = new TestAsyncThunk(loginByUsername, { status: 403 })
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.payload).toEqual('error')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})

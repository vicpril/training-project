import { StateSchema } from 'app/providers/StoreProvider'
import { initialLodinFormState } from '../../slices/loginSlice'
import { getLoginState } from './getLoginState'

describe('Selector getLoginState.test', () => {
  test('Username filled', () => {
    const state: DeepPartial<StateSchema> = ({ loginForm: { username: '123123' } })
    expect(getLoginState(state as StateSchema)).toEqual({ username: '123123' })
  })
  test('Password filled', () => {
    const state: DeepPartial<StateSchema> = ({ loginForm: { password: '123123' } })
    expect(getLoginState(state as StateSchema)).toEqual({ password: '123123' })
  })
  test('isLoading filled', () => {
    const state: DeepPartial<StateSchema> = ({ loginForm: { isLoading: true } })
    expect(getLoginState(state as StateSchema)).toEqual({ isLoading: true })
  })
  test('State empty', () => {
    const state: DeepPartial<StateSchema> = ({})
    expect(getLoginState(state as StateSchema)).toEqual(initialLodinFormState)
  })
})

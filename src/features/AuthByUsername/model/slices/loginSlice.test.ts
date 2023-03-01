import { DeepPartial } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer, loginSlice } from './loginSlice'

describe('loginSlice.test', () => {
  test('setLoginUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' }
    expect(loginReducer(state as LoginSchema, loginActions.setLoginUsername('qwe'))).toEqual({ username: 'qwe' })
  })
  test('setLoginPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(state as LoginSchema, loginActions.setLoginPassword('qwe'))).toEqual({ password: 'qwe' })
  })
  test('Set Login Form Pending', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false }
    expect(loginSlice.reducer(state as LoginSchema, loginByUsername.pending)).toEqual({ isLoading: true })
  })
})

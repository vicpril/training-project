import { StateSchema } from 'app/providers/StoreProvider'
import { initialLodinFormState } from '../../slices/loginSlice'

export const getLoginState = (state: StateSchema) => state.loginForm ?? initialLodinFormState

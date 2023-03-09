import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<Result, Args, RejectedValue>
  = (args: Args) => AsyncThunkAction<Result, Args, RejectedValue>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Result, Args, RejectedValue> {
  getState: () => StateSchema

  dispatch: jest.MockedFn<any>

  actionCreator: ActionCreatorType<Result, Args, RejectedValue>

  api: jest.MockedFunctionDeep<AxiosStatic>

  navigate: jest.Mock<any>

  constructor(
    actionCreator: ActionCreatorType<Result, Args, RejectedValue>,
    responseMock?: object,
  ) {
    this.actionCreator = actionCreator
    this.getState = jest.fn()
    this.dispatch = jest.fn()

    this.api = mockedAxios
    this.navigate = jest.fn()

    if (responseMock) {
      this.api.get.mockResolvedValue(Promise.resolve(responseMock))
      this.api.post.mockResolvedValue(Promise.resolve(responseMock))
      this.api.put.mockResolvedValue(Promise.resolve(responseMock))
      this.api.patch.mockResolvedValue(Promise.resolve(responseMock))
      this.api.delete.mockResolvedValue(Promise.resolve(responseMock))
    }
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args)

    const result = await action(
      // @ts-ignore
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    )

    return result
  }
}

import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Result, Args, RejectedValue>
  = (args: Args) => AsyncThunkAction<Result, Args, RejectedValue>

export class TestAsyncThunk<Result, Args, RejectedValue> {
  getState: () => StateSchema

  dispatch: jest.MockedFn<any>
  // dispatch: Dispatch

  actionCreator: ActionCreatorType<Result, Args, RejectedValue>

  constructor(actionCreator: ActionCreatorType<Result, Args, RejectedValue>) {
    this.actionCreator = actionCreator
    this.getState = jest.fn()
    this.dispatch = jest.fn()
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args)

    // @ts-ignore
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}

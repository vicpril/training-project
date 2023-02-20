import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent'
import { Counter } from './Counter'

describe('Counter Component', () => {
  test('test render', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })
  test('increase click', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
  test('decrease click', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})

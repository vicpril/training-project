import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

interface InitialProps {
  route?: string
}

export function renderComponent(component: ReactNode, opitons: InitialProps = {}) {
  const route = opitons.route ?? '/'
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  )
}

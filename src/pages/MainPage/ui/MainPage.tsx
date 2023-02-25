import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
// import { Counter } from 'entities/Counter'

function MainPage() {
  const { t } = useTranslation('main')
  return (
    <h1>
      <BugButton />
      {t('Главная страница')}
      {/* <Counter /> */}
    </h1>
  )
}

export default MainPage

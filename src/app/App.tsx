import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { AppRouter } from './providers/AppRouter'

function App() {
  const { theme } = useTheme()

  const dispatch = useDispatch()
  dispatch(userActions.initAuthData())

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

      <div id="modals" />
    </div>
  )
}

export default App

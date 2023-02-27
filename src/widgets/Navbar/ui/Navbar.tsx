import { userActions, getUserAuthData } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useFlag } from 'shared/lib/hooks/useFlag/useFlag'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  const { t } = useTranslation()

  const { flag: isOpen, on: openModal, off: closeModal } = useFlag(false)

  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.ClearInverted}
          className={cls.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          onClick={openModal}
          theme={ButtonTheme.ClearInverted}
        >
          {t('login')}
        </Button>
      </div>
      <LoginModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>

  )
}

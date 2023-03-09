import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'shared/config/routerConfig'
import cls from './LoginForm.module.scss'
import { loginActions, loginReducer } from '../../model/slices/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState)

  const onUsernameChange = useCallback((value: string) => {
    dispatch(loginActions.setLoginUsername(value))
  }, [dispatch])

  const onPasswordChange = useCallback((value: string) => {
    dispatch(loginActions.setLoginPassword(value))
  }, [dispatch])

  const navigate = useNavigate()

  const onSubmitClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
      navigate(RoutePaths.about)
    }
  }, [dispatch, navigate, onSuccess, password, username])

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text
          title={t('Форма авторизации')}
        />
        {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
        <Input
          autofocus
          type="text"
          className={cls.input}
          placeholder={t('Введите username')}
          onChange={onUsernameChange}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Введите пароль')}
          onChange={onPasswordChange}
        />
        <Button
          className={cls.loginBtn}
          theme={ButtonTheme.Outline}
          onClick={onSubmitClick}
          disabled={isLoading}
        >
          {t('login')}
        </Button>

      </div>
    </DynamicModuleLoader>

  )
})

export default LoginForm

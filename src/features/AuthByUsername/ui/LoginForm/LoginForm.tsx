import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { memo } from 'react'
import cls from './LoginForm.module.scss'
import { loginActions, loginReducer } from '../../model/slices/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState)

  const onUsernameChange = (value: string) => {
    dispatch(loginActions.setLoginUsername(value))
  }

  const onPasswordChange = (value: string) => {
    dispatch(loginActions.setLoginPassword(value))
  }

  const onSubmitClick = () => {
    dispatch(loginByUsername({ username, password }))
  }

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

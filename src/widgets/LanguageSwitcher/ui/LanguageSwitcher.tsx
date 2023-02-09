import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props

  const { t, i18n } = useTranslation()

  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <Button
      className={classNames('LanguageSwitcher', {}, [className])}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>

  )
}

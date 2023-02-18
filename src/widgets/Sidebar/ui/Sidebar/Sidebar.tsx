import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePaths } from 'shared/config/routerConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props

  const { t } = useTranslation()

  const [collapsed, setCollapsed] = useState(false)
  const toggleSidebar = () => setCollapsed((prev) => !prev)

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.items}>
        <AppLink to={RoutePaths.main} theme="secondary" className={cls.item}>
          <div className={cls.icon}><MainIcon /></div>
          <div className={cls.label}>{t('main')}</div>
        </AppLink>
        <AppLink to={RoutePaths.about} theme="secondary" className={cls.item}>
          <div className={cls.icon}><AboutIcon /></div>
          <div className={cls.label}>{t('about')}</div>
        </AppLink>
      </div>

      <Button
        data-testid="sidebar-toggle"
        type="button"
        className={cls.toggler}
        onClick={toggleSidebar}
        theme={ButtonTheme.BackgroundInverted}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>

  )
}

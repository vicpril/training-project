import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props

  const { t } = useTranslation()

  const [collapsed, setCollapsed] = useState(false)
  const toggleSidebar = () => setCollapsed((prev) => !prev)
  const toggleButtonText = useMemo(() => (collapsed ? t('collapse') : t('uncollapse')), [collapsed])

  return (
    <div 
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button
        data-testid="sidebar-toggle"
        type="button"
        onClick={toggleSidebar}
      >
        {toggleButtonText}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>

  )
}

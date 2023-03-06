import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../model/items'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props

  const { t } = useTranslation()

  return (
    <AppLink
      to={item.path}
      theme="secondary"
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <div className={cls.icon}><item.Icon /></div>
      <div className={cls.label}>{t(item.text)}</div>
    </AppLink>

  )
}

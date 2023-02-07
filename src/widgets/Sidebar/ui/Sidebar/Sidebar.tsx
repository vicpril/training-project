import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(prev => !prev)

  return ( 
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
       <button onClick={toggleSidebar}>toggle</button>
       <div className={cls.switchers}>
          <ThemeSwitcher></ThemeSwitcher>
          <LanguageSwitcher className={cls.lang}></LanguageSwitcher>
       </div>
    </div>

  )
}

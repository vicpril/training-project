import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  return ( 
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher></ThemeSwitcher>
      <div className={cls.links}>
        <AppLink to='/' theme="secondary" className={cls.mainLink}>Main</AppLink>
        <AppLink to='/about'>About</AppLink>
      </div>
    </div>

  );
}
 

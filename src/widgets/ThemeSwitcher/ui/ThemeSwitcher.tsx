import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props
  const {theme, toggleTheme} = useTheme()

  return ( 
    <Button 
      className={classNames('ThemeSwitcher', {}, [className])}
      onClick={toggleTheme}
      theme="clear"
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>

  )
}
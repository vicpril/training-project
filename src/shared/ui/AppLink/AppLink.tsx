import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { 
    className, 
    to,
    children, 
    theme = 'secondary', 
    ...otherProps
  } = props

  return ( 
    <Link 
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
       {children}
    </Link>

  )
}

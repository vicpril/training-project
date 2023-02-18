import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  Clear = 'clear',
  Outline = 'outline',
  Background = 'background',
  BackgroundInverted = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  square?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    size = ButtonSize.M,
    square = false,
    children,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  }

  const additionalClasses = [className, cls[theme], cls[size]]

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, additionalClasses)}
      {...otherProps}
    >
      {children}
    </button>

  )
}

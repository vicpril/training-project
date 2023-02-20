import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          onClick={() => setIsOpen(true)}
          theme={ButtonTheme.ClearInverted}
        >
          {t('login')}
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/* eslint-disable-next-line max-len */}
        {t('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam hic impedit nam cupiditate dignissimos iusto magni accusamus quod doloremque corporis vel, vero nisi, fuga pariatur. Officiis corporis veritatis nihil fugit ad, tempora fugiat nesciunt dignissimos, deserunt explicabo sapiente asperiores assumenda ipsa suscipit illum? Ullam facilis officiis nihil quos eum!')}
      </Modal>
    </div>

  )
}

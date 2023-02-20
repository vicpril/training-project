import React, {
  ReactNode, useCallback, useEffect, useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose,
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const [target, setTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setTarget(document.getElementById('modals'))
  }, [])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  }

  const onCloseHandler = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 200)
  }, [onClose])

  const onEscDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onCloseHandler()
    }
  }, [isOpen, onCloseHandler])

  window.addEventListener('keydown', onEscDown)

  useEffect(() => () => {
    window.removeEventListener('keydown', onEscDown)
  }, [onEscDown])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Portal element={target}>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  )
}

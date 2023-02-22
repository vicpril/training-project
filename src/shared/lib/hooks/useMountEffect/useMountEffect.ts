import { useEffect } from 'react'

export const useMountEffect = (callback: () => void) => {
  useEffect(() => {
    callback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

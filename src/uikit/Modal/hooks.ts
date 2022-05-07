import { useState, useCallback } from 'react'

export const useModalState = (defaultVisible?: boolean) => {
  const [isVisible, setIsVisible] = useState<boolean>(defaultVisible || false)
  const showModal = useCallback(() => {
    setIsVisible(true)
  }, [])
  const closeModal = useCallback(() => {
    setIsVisible(false)
  }, [])
  return [isVisible, showModal, closeModal] as [boolean, () => void, () => void]
}

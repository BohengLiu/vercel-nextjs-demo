import React, { FC, memo } from 'react'
import { Modal } from '@/uikit/Modal'

export const WalletModalContent: FC = memo(() => {
  return <div className="w-96 h-96 rounded-3xl bg-white">11</div>
})

WalletModalContent.displayName = 'WalletModalContent'

interface WalletModalProps {
  visible: boolean
  onClose: () => void
}

export const WalletModal: FC<WalletModalProps> = memo(({ visible, onClose }) => {
  return (
    <Modal visible={visible} onMaskClick={onClose}>
      <WalletModalContent />
    </Modal>
  )
})

WalletModal.displayName = 'WalletModal'

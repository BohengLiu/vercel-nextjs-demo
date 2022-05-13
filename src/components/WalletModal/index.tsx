import React, { FC, memo } from 'react'
import { Modal } from '@/uikit/Modal'

import CloseIcon from '@/components/Icons/Close'
import { useWeb3ConnectorMap } from '@/providers/web3ConnectorsMap'
import { MetaMaskConnector, WalletConnector, CoinbaseConnector } from './ConnectorItem'

interface WalletModalContentProps {
  onClose: () => void
}

export const WalletModalContent: FC<WalletModalContentProps> = memo(({ onClose }) => {
  const web3ConnectorMap = useWeb3ConnectorMap()
  const [metaMask, metaMaskHooks] = web3ConnectorMap.METAMASK
  const { useIsActivating } = metaMaskHooks
  const isActivating = useIsActivating()
  console.log('isActivating', isActivating)

  return (
    <div className="w-96 h-96 rounded-2xl bg-white">
      <div className="flex items-center h-14 px-4">
        <div className="flex-grow">Connect Your Wallet</div>
        <div className=" flex-shrink-0" onClick={onClose}>
          <CloseIcon size={24} />
        </div>
      </div>
      <div className="flex flex-col px-4">
        <MetaMaskConnector />
        <WalletConnector />
        <CoinbaseConnector />
      </div>
    </div>
  )
})

WalletModalContent.displayName = 'WalletModalContent'

interface WalletModalProps {
  visible: boolean
  onClose: () => void
}

export const WalletModal: FC<WalletModalProps> = memo(({ visible, onClose }) => {
  return (
    <Modal visible={visible} onMaskClick={onClose}>
      <WalletModalContent onClose={onClose} />
    </Modal>
  )
})

WalletModal.displayName = 'WalletModal'

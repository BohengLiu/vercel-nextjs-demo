import React, { memo } from 'react'
import { NextPage } from 'next'

import { useWeb3React } from '@web3-react/core'

import { useModalState, Modal } from '../uikit/Modal'

import { WalletModal } from '../components/WalletModal'

const Home: NextPage = () => {
  const web3 = useWeb3React()
  const [isVisible, showModal, closeModal] = useModalState()
  const { account } = web3
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex h-14 px-4 w-full items-center border-b border-gray-200">
        {account}
        <button className="bg-blue-500 h-10 rounded-3xl px-4 text-white" onClick={showModal}>
          Connect Wallet
        </button>
        <WalletModal visible={isVisible} onClose={closeModal} />
      </nav>
      <main className="flex flex-col flex-grow"> 11</main>
    </div>
  )
}

export default memo(Home)

import { FC, memo, useCallback } from 'react'
import Image from 'next/image'
import { useWeb3ConnectorMap } from '@/providers/web3ConnectorsMap'

interface ConnectorItemUIProps {
  title: string
  icon: React.ReactNode
  onClick: () => void
}

export const ConnectorItemUI: FC<ConnectorItemUIProps> = memo(({ title, icon, onClick }) => {
  return (
    <div
      className="my-1 px-5 flex items-center w-full h-16 bg-gray-100 rounded-xl border border-gray-200 hover:cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <div className=" flex-grow text-lg font-medium">{title}</div>
      {icon}
    </div>
  )
})

export const MetaMaskConnector: FC = () => {
  const web3ConnectorMap = useWeb3ConnectorMap()
  const [metaMask, metaMaskHooks] = web3ConnectorMap.METAMASK
  const { useIsActivating, useAccount, useError, useIsActive, useChainId } = metaMaskHooks
  const isActivating = useIsActivating()
  const account = useAccount()
  const error = useError()
  const isActive = useIsActive()
  const chainId = useChainId()
  console.log({
    isActivating,
    account,
    error,
    isActive,
    chainId,
  })
  const handleClick = useCallback(() => {
    console.log('MetaMaskConnector')
    metaMask.activate()
  }, [metaMask])
  return (
    <ConnectorItemUI
      title="MetaMask"
      onClick={handleClick}
      icon={<Image alt="metamask" src="/static/wallet-icons/metamask-icon.svg" width={32} height={32} />}
    />
  )
}

export const WalletConnector: FC = () => {
  const handleClick = useCallback(() => {
    console.log('WalletConnector')
  }, [])
  return (
    <ConnectorItemUI
      title="WalletConnect"
      onClick={handleClick}
      icon={<Image alt="metamask" src="/static/wallet-icons/walletconnect-icon.svg" width={32} height={32} />}
    />
  )
}

export const CoinbaseConnector: FC = () => {
  const handleClick = useCallback(() => {
    console.log('CoinbaseConnector')
  }, [])
  return (
    <ConnectorItemUI
      title="Coinbase Wallet"
      onClick={handleClick}
      icon={<Image alt="metamask" src="/static/wallet-icons/coinbasewallet-icon.svg" width={32} height={32} />}
    />
  )
}

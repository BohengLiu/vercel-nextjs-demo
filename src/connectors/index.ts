import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { Connector } from '@web3-react/types'
import { Web3ReactHooks, initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { URLS } from '@/constants/chains'

import { Web3ConnecterMap } from '@/types'

export const getConnectors = (): Web3ConnecterMap => {
  const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>((actions) => new MetaMask(actions))
  const [walletConnect, walletConnectHooks] = initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect(actions, {
        rpc: URLS,
      }),
    Object.keys(URLS).map((chainId) => Number(chainId))
  )
  const [coinbaseWallet, coinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
    (actions) =>
      new CoinbaseWallet(actions, {
        url: URLS[1][0],
        appName: 'web3-react',
      })
  )
  const [network, networkHooks] = initializeConnector<Network>(
    (actions) => new Network(actions, URLS),
    Object.keys(URLS).map((chainId) => Number(chainId))
  )

  return {
    METAMASK: [metaMask, metaMaskHooks],
    WALLETCONNECT: [walletConnect, walletConnectHooks],
    COINBASEWALLET: [coinbaseWallet, coinbaseWalletHooks],
    NETWORK: [network, networkHooks],
  }
}

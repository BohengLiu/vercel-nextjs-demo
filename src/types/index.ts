import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { Web3ReactHooks } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import type { Network } from '@web3-react/network'
import type { WalletConnect } from '@web3-react/walletconnect'

export interface Web3ConnecterMap {
  METAMASK: [MetaMask, Web3ReactHooks]
  WALLETCONNECT: [WalletConnect, Web3ReactHooks]
  COINBASEWALLET: [CoinbaseWallet, Web3ReactHooks]
  NETWORK: [Network, Web3ReactHooks]
}

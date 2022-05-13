import { createContext, useContext } from 'react'
import { Web3ConnecterMap } from '@/types'

type Web3ConnecterContextType = {
  connectorMap: Web3ConnecterMap
}

export const Web3ConnectersContext = createContext<Web3ConnecterContextType | undefined>(undefined)

export const useWeb3ConnectorMap = () => {
  const { connectorMap } = useContext<Web3ConnecterContextType | undefined>(Web3ConnectersContext)
  return connectorMap
}

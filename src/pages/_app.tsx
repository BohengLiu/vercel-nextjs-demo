import React from 'react'
import { NextPage } from 'next'
import { Web3ReactProvider } from '@web3-react/core'

import { getConnectors } from '@/connectors'
import { Web3ConnectersContext } from '@/providers/web3ConnectorsMap'

import '../styles/globals.css'
import '../styles/tailwind.css'

const connectorMap = getConnectors()
const connectors = Object.values(connectorMap)

function MyApp({ Component, pageProps }: { Component: NextPage; pageProps: any }) {
  return (
    <Web3ConnectersContext.Provider value={{ connectorMap }}>
      <Web3ReactProvider connectors={connectors}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </Web3ConnectersContext.Provider>
  )
}

export default MyApp

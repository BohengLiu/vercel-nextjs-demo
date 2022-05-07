import React from 'react'
import { NextPage } from 'next'
import { Web3ReactProvider } from '@web3-react/core'

import { connectors } from '../connectors'

import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: { Component: NextPage; pageProps: any }) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp

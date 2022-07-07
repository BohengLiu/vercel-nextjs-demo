import React, { memo, useEffect } from 'react'
import { NextPage } from 'next'
import { Connection, PublicKey } from "@solana/web3.js";


const endpoint = 'https://api.mainnet-beta.solana.com'

const connection = new Connection(endpoint)

const publicKey = new PublicKey('Fty4ZFtu8Q1PVcpb2ygcrtiEsnqYpsgg6cEx9CYSjtkk')

const Solana: NextPage = () => {

  useEffect(() => {
    const resp = connection.getAccountInfo(publicKey)
    console.log(resp)
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <h1>Solana</h1>
      <p>account: {publicKey.toBase58()}</p>
      <main className="flex flex-col flex-grow">

      </main>
    </div>
  )
}

export default memo(Solana)

import React, { memo, useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'

const BNC: NextPage = () => {
  const jumpToLogin = useCallback(() => {
    window.location.href = 'bnc://app.binance.com/setting/login'
  }, [])
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-col flex-grow">
        <h1>BNC Jump</h1>
        <a href="bnc://app.binance.com/setting/login">login</a>
        <button onClick={jumpToLogin}>login btn</button>
      </main>
    </div>
  )
}

export default memo(BNC)

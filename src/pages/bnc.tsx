import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'

const BNC: NextPage = () => {
  const ref = useRef(null)
  const jumpToLogin = useCallback(() => {
    window.location.href = 'bnc://app.binance.com/setting/login'
    setTimeout(() => {
      window.location.href = '/'
    }, 500)
  }, [])
  const handleLogin2 = useCallback(() => {
    const el = document.createElement('iframe')
    el.src = 'bnc://app.binance.com/setting/login'
    ref.current.appendChild(el)
  }, [])
  return (
    <div ref={ref} className="flex flex-col h-screen">
      <main className="flex flex-col flex-grow">
        <h1>BNC Jump</h1>
        {/* <a href="bnc://app.binance.com/setting/login">login</a> */}
        <button onClick={jumpToLogin}>login btn</button>
        <button onClick={handleLogin2}>login btn 2</button>
      </main>
    </div>
  )
}

export default memo(BNC)

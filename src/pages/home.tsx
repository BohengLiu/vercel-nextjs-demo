import React, { memo } from 'react'
import { NextPage } from 'next'

const Home: NextPage = memo(() => {
  return (
    <div>
      <nav className="h-14 px-4 w-full"></nav>
      <main className="flex flex-col flex-grow"> 11</main>
    </div>
  )
})

Home.displayName = 'Home'

export default Home

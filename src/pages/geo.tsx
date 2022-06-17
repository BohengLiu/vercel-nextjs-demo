import React, { memo, useEffect, useState } from 'react'
import { NextPage } from 'next'

const Geo: NextPage = () => {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [errorContent, setErrorContent] = useState('')
  useEffect(() => {
    if (!window.navigator.geolocation) {
      setErrorContent('not support window.navigator.geolocation')
    }
    const geoShowPosition = (position) => {
      if (position) {
        const location = { lat: position.coords.latitude, lng: position.coords.longitude }
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        console.log(position)
        console.log({ location, flag: 1 })
      } else {
        console.log('error')
      }
    }
    const geoShowError = (error) => {
      console.log(`getPosError:${error.code},${navigator.geolocation},${error.message}`)
      setErrorContent(`getPosError:${error.code},${navigator.geolocation},${error.message}`)
    }
    navigator.geolocation.getCurrentPosition(geoShowPosition, geoShowError)
  }, [])
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-col flex-grow">
        <h1>Position</h1>
        <p>Lat: {lat}</p>
        <p>lng: {lng}</p>
        <p>error: {errorContent}</p>
      </main>
    </div>
  )
}

export default memo(Geo)

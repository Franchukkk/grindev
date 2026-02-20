'use client'

import { useEffect, useState } from 'react'
import './AppLoading.css'

export default function AppLoading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onLoad = () => {
      setLoading(false)
    }

    if (document.readyState === 'complete') {
      setLoading(false)
    } else {
      window.addEventListener('load', onLoad)
    }

    return () => window.removeEventListener('load', onLoad)
  }, [])

  if (!loading) return null

  return (
    <div className="app-loading">
      <div className="loader"></div>
      <h2>
        Виводимо ваш бізнес на новий рівень
        <span className="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </h2>
    </div>
  )
}
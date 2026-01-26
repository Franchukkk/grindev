'use client'

import { useEffect, useRef } from 'react'
import './Banner.sass'

export default function Banner() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const textWidth = track.offsetWidth
    const screenWidth = window.innerWidth

    const repeatCount = Math.ceil(screenWidth / textWidth) + 2

    const original = track.innerHTML
    track.innerHTML = original.repeat(repeatCount)
  }, [])

  return (
    <section className="horizontal-banner">
      <div className="marquee">
        <div className="marquee-track" ref={trackRef}>
          <h2>Створюємо сайти від яких ваші конкуренти тихо плачуть</h2>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useEffect, useState } from 'react'
import './BackgroundBlobs.sass'

const BLOBS_COUNT = 4

const randomPosition = () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  scale: 0.8 + Math.random() * 0.8,
})

export default function BackgroundBlobs() {
  const [blobs, setBlobs] = useState([])

  useEffect(() => {
    setBlobs(Array.from({ length: BLOBS_COUNT }, () => randomPosition()))

    const intervals = Array.from({ length: BLOBS_COUNT }).map((_, i) => {
      const randomTime = 5000 + Math.random() * 3000
      return setInterval(() => {
        setBlobs(prev =>
          prev.map((b, index) => (index === i ? randomPosition() : b))
        )
      }, randomTime)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  if (blobs.length === 0) return null

  return (
    <div className="background-blobs">
      {blobs.map((blob, i) => (
        <span
          key={i}
          className="blob"
          style={{
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            transform: `translate(-50%, -50%) scale(${blob.scale})`,
          }}
        />
      ))}
    </div>
  )
}
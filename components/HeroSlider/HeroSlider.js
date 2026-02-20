'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import './HeroSlider.sass'

export default function HeroSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = images.length

  const startX = useRef(0)
  const isDragging = useRef(false)

  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + total) % total)

  const nextSlide = () =>
    setCurrentIndex((currentIndex + 1) % total)

  const handleSliderChange = (e) => {
    setCurrentIndex(Number(e.target.value))
  }

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX
    handleSwipe(endX)
  }

  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.clientX
  }

  const onMouseUp = (e) => {
    if (!isDragging.current) return
    isDragging.current = false
    handleSwipe(e.clientX)
  }

  const handleSwipe = (endX) => {
    const diff = endX - startX.current
    const threshold = 50 // мінімальна відстань для свайпу

    if (diff > threshold) prevSlide()
    if (diff < -threshold) nextSlide()
  }

  return (
    <div
      className="slider"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {/* Номер зображення */}
      <div className="slider-number">
        <span className="green-text">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span> / {String(total).padStart(2, '0')}</span>
      </div>

      {/* Зображення */}
      <div className="slider-image-wrapper">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`slide ${idx === currentIndex ? 'active' : 'inactive'}`}
          >
            <Image
              src={img}
              alt={`Project ${idx + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              draggable={false}
              priority
            />
          </div>
        ))}
      </div>

      {/* Скроллбар + стрілки */}
      <div className="slider-controls items-center justify-center">
        <input
          type="range"
          min={0}
          max={total - 1}
          value={currentIndex}
          onChange={handleSliderChange}
          className="custom-range"
        />

        <div className="slider-arrows d-flex">
          <a onClick={prevSlide} className="arrow arrow-left"></a>
          <a onClick={nextSlide} className="arrow arrow-right"></a>
        </div>
      </div>
    </div>
  )
}
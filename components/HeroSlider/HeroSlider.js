'use client'

import { useState } from 'react'
import Image from 'next/image'
import './HeroSlider.sass'

export default function HeroSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = images.length

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + total) % total)
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % total)

  const handleSliderChange = (e) => {
    setCurrentIndex(Number(e.target.value))
  }

  return (
    <div className="slider">
      {/* Номер зображення */}
      <div className="slider-number">
        <span className='green-text'>
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
            <Image src={img} alt={`Project ${idx + 1}`} fill style={{ objectFit: 'contain' }} />
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
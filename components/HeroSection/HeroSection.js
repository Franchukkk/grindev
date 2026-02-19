'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import './HeroSection.sass'
import Button from '@/components/Button/Button'
import HeroSlider from '@/components/HeroSlider/HeroSlider'

export default function HeroSection() {
  const words = ["Сайтами", "Додатками", "Дизайном"]
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const typingSpeed = 150
  const deletingSpeed = 80
  const pause = 2000

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed)
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed)
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words])

  const sliderImages = [
    '/images/Ariet.png',
    '/images/TT.png',
  ]

  return (
    <section className="hero wrapper">
      <div className="row hero-content items-center">
        {/* Ліва частина: заголовок і кнопки */}
        <div className="col-12 col-md-12 col-lg-6 hero-left">
          <h1>
            Ми займаємось<br /> <span className="handwritten-text">{text}</span>
          </h1>
          <p>
          Веб-рішення, що тримають навантаження, масштабуються з бізнесом та дають результат.
          </p>

          <div className="hero-buttons-line">
            <div className="row gx-5 gy-3">
              <div className="col-12 col-sm-6 col-md-6">
                <Button variant="primary-tg">ОБГОВОРИТИ ПРОЄКТ</Button>
              </div>
              <div className="col-12 col-sm-6 col-md-6">
                <Button variant="secondary-border">НАШІ КЕЙСИ</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Права частина: слайдер */}
        <div className="col-12 col-md-12 col-lg-6 hero-right">
          <HeroSlider images={sliderImages} />
        </div>
      </div>
    </section>
  )
}
'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import Title from '../Title/Title'
import './Steps.sass'

export default function Steps() {
  const contentRef = useRef(null)
  const lineRef = useRef(null)

  const updateLine = () => {
    const content = contentRef.current
    const line = lineRef.current
    if (!content || !line) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (isMobile) {
      // Вертикальна лінія: висота = висота контейнера
      line.style.width = ''              // прибираємо inline width
      line.style.height = `${content.scrollHeight}px`
      return
    }

    // Desktop: горизонтальна лінія як було
    line.style.height = '' // скидаємо, якщо раптом було з мобілки
    const full = content.scrollWidth
    const left = parseFloat(getComputedStyle(line).left) || 0
    const width = Math.max(0, full - left)
    line.style.width = `${width}px`
  }

  useLayoutEffect(() => {
    updateLine()
  }, [])

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    window.addEventListener('resize', updateLine)

    const ro = new ResizeObserver(() => updateLine())
    ro.observe(content)

    if (document.fonts?.ready) {
      document.fonts.ready.then(updateLine).catch(() => {})
    }

    return () => {
      window.removeEventListener('resize', updateLine)
      ro.disconnect()
    }
  }, [])

  return (
    <section className='steps wrapper-sm'>
      <Title>Етапи розробки веб-продукту</Title>

      <div className="steps-content flex-between" ref={contentRef}>
        <div className="steps-line" ref={lineRef} />

        <div className="step-item">
          <b>01</b>
          <h3>ЗБІР ІНФОРМАЦІЇ</h3>
          <p>Отримуємо від вас дані про продукт, аналізуємо цілі і потреби бізнесу.</p>
        </div>

        <div className="step-item">
          <b>02</b>
          <h3>ГЛИБОКИЙ АНАЛІЗ</h3>
          <p>Вивчимо помилки ваших конкурентів та ваші переваги, оформимо структуру сайту.</p>
        </div>

        <div className="step-item">
          <b>03</b>
          <h3>РОЗРОБКА ДИЗАЙНУ</h3>
          <p>Створення дизайну сайту за вашими побажаннями з варіантами на вибір.</p>
        </div>

        <div className="step-item">
          <b>04</b>
          <h3>ТЕХНІЧНА РЕАЛІЗАЦІЯ</h3>
          <p>Робимо верстку сайту з підключенням домену, адаптацією під усі пристрої.</p>
        </div>

        <div className="step-item">
          <b>05</b>
          <h3>ЗАПУСК САЙТУ</h3>
          <p>Сайт починає працювати та приносити вам $$$$$$</p>
        </div>
      </div>
    </section>
  )
}
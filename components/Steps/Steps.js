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
          <h3>АНАЛІЗ ТА ЗАДАЧІ</h3>
          <p>Розбираємо ваш бізнес, конкурентів і точки росту.</p>
        </div>

        <div className="step-item">
          <b>02</b>
          <h3>ПРОЄКТУВАННЯ ЛОГІКИ</h3>
          <p>Будуємо структуру сайту та шлях користувача до результату.</p>
        </div>

        <div className="step-item">
          <b>03</b>
          <h3>РОЗРОБКА ДИЗАЙНУ</h3>
          <p>Створюємо дизайн, який веде користувача та підсилює довіру до продукту.</p>
        </div>

        <div className="step-item">
          <b>04</b>
          <h3>ТЕХНІЧНА РЕАЛІЗАЦІЯ</h3>
          <p>Збираємо сайт, оптимізуємо швидкість і готуємо до навантажень.</p>
        </div>

        <div className="step-item">
          <b>05</b>
          <h3>ЗАПУСК У РОБОТУ</h3>
          <p>Виводимо продукт у продакшн після тестування.</p>
        </div>

        <div className="step-item">
          <b>06</b>
          <h3>САЙТ ПРИНОСИТЬ $$$</h3>
          <p>Продукт працює стабільно та починає приносити результат бізнесу.</p>
        </div>
      </div>
    </section>
  )
}
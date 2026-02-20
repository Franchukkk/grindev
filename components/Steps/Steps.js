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
          <h3>ПОСТАНОВКА ЗАДАЧ І ЦІЛЕЙ</h3>
          <p>Фіксуємо задачі проєкту, очікування та бізнес-вимоги.</p>
        </div>

        <div className="step-item">
          <b>02</b>
          <h3>ФОРМУВАННЯ ТЕХНІЧНОГО ЗАВДАННЯ</h3>
          <p>Описуємо функціонал, обмеження та технічні вимоги до продукту.</p>
        </div>

        <div className="step-item">
          <b>03</b>
          <h3>ПЛАНУВАННЯ ЕТАПІВ РОБОТИ</h3>
          <p>Розбиваємо проєкт на етапи з термінами та зонами відповідальності.</p>
        </div>

        <div className="step-item">
          <b>04</b>
          <h3>УЗГОДЖЕННЯ УМОВ ТА ДОГОВІР</h3>
          <p>Фіксуємо домовленості, обсяг робіт і формат співпраці.</p>
        </div>

        <div className="step-item">
          <b>05</b>
          <h3>ПРОЄКТУВАННЯ АРХІТЕКТУРИ</h3>
          <p>Закладаємо структуру системи з запасом на масштабування.</p>
        </div>

        <div className="step-item">
          <b>06</b>
          <h3>ДИЗАЙН ТА РОЗРОБКА</h3>
          <p>Реалізуємо інтерфейс і функціонал з фокусом на якість та швидкість.</p>
        </div>

        <div className="step-item">
          <b>07</b>
          <h3>ТЕСТУВАННЯ ТА ЗАПУСК</h3>
          <p>Перевіряємо продукт і готуємо його до роботи в продакшені.</p>
        </div>

        <div className="step-item">
          <b>08</b>
          <h3>ПЕРЕДАЧА ТА НАВЧАННЯ</h3>
          <p>Пояснюємо, як працювати з продуктом, передаємо доступи та документацію.</p>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useEffect, useRef } from 'react'
import './AboutUs.sass'

export default function AboutUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const counters = sectionRef.current.querySelectorAll('h3')
    let started = false

    // ⬇️ одразу ховаємо фінальні значення
    counters.forEach(el => {
      const text = el.textContent.trim()
      const number = parseInt(text.replace(/\D/g, ''), 10)
      const suffix = text.replace(/[0-9]/g, '')

      el.dataset.value = number
      el.dataset.suffix = suffix
      el.textContent = '0' + suffix
    })

    const animate = () => {
      if (started) return
      started = true

      counters.forEach(el => {
        const number = parseInt(el.dataset.value, 10)
        const suffix = el.dataset.suffix

        let current = 0
        const duration = 2200 // ⬅️ довше
        const stepTime = Math.max(16, duration / number)

        const timer = setInterval(() => {
          current++
          el.textContent = current + suffix

          if (current >= number) {
            el.textContent = number + suffix
            clearInterval(timer)
          }
        }, stepTime)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && animate(),
      { threshold: 0.4 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" ref={sectionRef}>
      <div className="wrapper">
        <div className="wrapper-md">
          <div className="items-center flex-between flex-wrap about-gap">
            <div className="about-description">
              <p>
                Запуск — це лише початок, а не фінал. Без правильної архітектури сайт швидко не витримує реальних задач.
              </p>
              <p>
                У GRINDev ми закладаємо основу для стабільної роботи, навантажень і подальшого росту бізнесу.
              </p>
            </div>

            <div className='about-info-table--parent'>
              <table className="about-info-table">
                <tbody>
                  <tr>
                    <td>
                      <h3 className="green-text">4+</h3>
                      <p>років досвіду</p>
                    </td>
                    <td>
                      <h3>90%</h3>
                      <p>рекомендацій</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>25+</h3>
                      <p>ніш бізнесу</p>
                    </td>
                    <td>
                      <h3>140+</h3>
                      <p>задоволених клієнтів</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
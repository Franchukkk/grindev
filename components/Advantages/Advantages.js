'use client'

import Title from '../Title/Title'
import Link from 'next/link'
import './Advantages.sass'

export default function Advantages() {
  return (
    <section className='advantages wrapper-sm'>
        <Title>Чому з нами працюють</Title>
        <div className="row advantages-grid">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item">
                    <b>01</b>
                    <h3>ВІД ІДЕЇ ДО ПРОДУКТУ</h3>
                    <p>Беремо проєкт від аналізу та ТЗ до запуску й підтримки. Вам не потрібно шукати виконавців під кожен етап.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item">
                    <b>02</b>
                    <h3>ВЕЛИКИЙ БІЗНЕС БЕЗ ОБМЕЖЕНЬ</h3>
                    <p>Реалізуємо рішення будь-якої складності: від сайтів до платформ і сервісів під будь-які задачі.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item cta-advantage-item">
                    <p>Напишіть нам — швидко розберемось у задачі та запропонуємо рішення.</p>
                    <a href="https://t.me/grindev_agency" className="advantage-link-button">ОБГОВОРИТИ ПРОЄКТ</a>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-8">
                <div className="advantage-item green-advantage-item">
                    <b>03</b>
                    <h3>ВАШ ІТ-ВІДДІЛ НА АУТСОРСІ</h3>
                    <p>Працюємо не як виконавці, а як технічна команда, що думає про ріст продукту та бере відповідальність за результат.</p>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
                <div className="advantage-item advantage-item-md-last">
                    <b>04</b>
                    <h3>СТАБІЛЬНІСТЬ І РЕЗУЛЬТАТ</h3>
                    <p>Запуск — не фінал. Фокусуємось на стабільній роботі продукту та результаті для бізнесу після релізу.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

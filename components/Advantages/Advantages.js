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
                <h3>ПОВНИЙ ЦИКЛ РОЗРОБКИ</h3>
                <p>
                    Беремо проєкт від формування вимог і ТЗ до запуску та подальшої підтримки.
                    Усі етапи закриває одна команда.
                </p>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item">
                <b>02</b>
                <h3>РІШЕННЯ ПІД ЗАДАЧІ БІЗНЕСУ</h3>
                <p>
                    Проєктуємо та реалізуємо веб-рішення під конкретні задачі: від сайтів
                    до платформ і сервісів з індивідуальною логікою.
                </p>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item cta-advantage-item">
                <p>
                    Опишіть задачу — підкажемо оптимальний технічний підхід.
                </p>
                <a
                    href="https://t.me/grindev_agency"
                    className="advantage-link-button"
                >
                    ОБГОВОРИТИ ПРОЄКТ
                </a>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-8">
                <div className="advantage-item green-advantage-item">
                <b>03</b>
                <h3>ТЕХНІЧНЕ ПАРТНЕРСТВО</h3>
                <p>
                    Працюємо як технічний партнер, а не як виконавці задач.
                    Беремо відповідальність за архітектуру, розробку та стабільну роботу продукту.
                </p>
                </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4">
                <div className="advantage-item advantage-item-md-last">
                <b>04</b>
                <h3>ФОКУС НА ЯКІСТЬ І СТАБІЛЬНІСТЬ</h3>
                <p>
                    Дбаємо про надійну роботу продукту після запуску та можливість його
                    подальшого розвитку без технічних обмежень.
                </p>
                </div>
            </div>
        </div>
    </section>
  )
}

'use client'

import Title from '../Title/Title'
import Link from 'next/link'
import './Advantages.sass'

export default function Advantages() {
  return (
    <section className='advantages wrapper-sm'>
        <Title>Чому обирають нас</Title>
        <div className="row advantages-grid">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item">
                    <b>01</b>
                    <h3>КОМПЛЕКСНИЙ ПІДХІД</h3>
                    <p>Від аудиту та технічного завдання до дизайну, розробки, тестування та підтримки — всі етапи під одним дахом.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item">
                    <b>02</b>
                    <h3>ВЕЛИКИЙ БІЗНЕС БЕЗ ОБМЕЖЕНЬ</h3>
                    <p>Створюємо платформи будь-якої складності, а не тільки сайти та інтернет-магазини..</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="advantage-item cta-advantage-item">
                    <p>Залиш заявку - проведемо аналіз і розкажемо, в якому напрямку рухатись.</p>
                    <a href="https://t.me/grindev_agency" className="advantage-link-button">ОБГОВОРИТИ ПРОЄКТ</a>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-8">
                <div className="advantage-item green-advantage-item">
                    <b>03</b>
                    <h3>ВАШ ІТ-ВІДДІЛ НА АУТСОРСІ</h3>
                    <p>Ми стаємо вашим зовнішнім ІТ-відділом, який бере на себе всю відповідальність за продукт...</p>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
                <div className="advantage-item advantage-item-md-last">
                    <b>04</b>
                    <h3>СТАБІЛЬНІСТЬ І РЕЗУЛЬТАТ</h3>
                    <p>Фокусуємось на довгостроковому ефекті: продукт працює для бізнесу навіть після запуску..</p>
                </div>
            </div>
        </div>
    </section>
  )
}

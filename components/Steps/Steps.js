'use client'

import Title from '../Title/Title'
import './Steps.sass'


export default function Steps() {
  return (
    <section className='steps wrapper-sm'>
        <Title>Етапи розробки веб-продукту</Title>
        <div className="steps-content flex-between">
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

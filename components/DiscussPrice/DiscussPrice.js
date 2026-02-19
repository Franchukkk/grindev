'use client'

import Button from '@/components/Button/Button'
import Title from '../Title/Title'
import './DiscussPrice.sass'

export default function DiscussPrice() {
  return (
    <section className='discuss-price'>
        <div className="wrapper-sm d-flex items-center flex-column">
            <Title className="white text-center">Маєте ідею? Давайте перетворимо її на продукт</Title>
            <p>Напишіть у Telegram — розберемо задачу та запропонуємо рішення.</p>
            <Button variant="primary-tg">ОБГОВОРИТИ ПРОЄКТ</Button>
        </div>
    </section>
  )
}

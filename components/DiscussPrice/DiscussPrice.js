'use client'

import Button from '@/components/Button/Button'
import Title from '../Title/Title'
import './DiscussPrice.sass'

export default function DiscussPrice() {
  return (
    <section className='discuss-price'>
        <div className="wrapper-sm d-flex items-center flex-column">
            <Title className="white text-center">Хочете розрахувати вартість вашого проєкту?</Title>
            <p>Залиште заявку в Telegram, і ми обговоримо ваші потреби та терміни.</p>
            <Button variant="primary-tg">ОБГОВОРИТИ ПРОЄКТ</Button>
        </div>
    </section>
  )
}

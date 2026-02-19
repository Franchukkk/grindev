'use client'

import Button from '@/components/Button/Button'
import './DiscussProject.sass'

export default function DiscussProject() {
  return (
    <section className='discuss-project'>
        <div className="wrapper-sm d-flex items-center flex-around discuss-project--content">
            <h2>ГОТОВІ <span>ЗАПУСТИТИ</span> ПРОЄКТ, ЩО <span>ПРАЦЮЄ</span>?</h2>
            <Button variant="primary-tg" className="black">ОБГОВОРИТИ ПРОЄКТ</Button>
        </div>
    </section>
  )
}

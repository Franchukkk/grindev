'use client'

import Title from '../Title/Title'
import './Cases.sass'
import CaseCard from '../CaseCard/CaseCard'

const cases = [
  {
    id: 1,
    href: "https://take-transfer.com",
    image: "/images/TT.png",
    category: "Розробка",
    title: "Take Transfer",
    description: "Продакшн-платформа бронювання трансферів з онлайн-оплатою та ролями для керування операційними процесами.",
    technologies: ["UX/UI Design", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
  },
]

export default function Cases() {
  return (
    <section className="cases wrapper-sm" id="cases">
      <Title>Найкращі кейси</Title>

      <div className="row g-0 case-cards-list">
        {cases.map((item) => (
          <CaseCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
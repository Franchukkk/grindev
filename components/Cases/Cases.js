'use client'

import Title from '../Title/Title'
import './Cases.sass'
import CaseCard from '../CaseCard/CaseCard'

const cases = [
  {
    id: 1,
    href: "https://ariet.kz",
    image: "/images/Ariet.webp",
    category: "Дизайн",
    title: "Ariet",
    description:
      "Дизайн корпоративного сайту виробника енергетичних рішень з особистим кабінетом та ролями.",
    technologies: ["UI/UX Design", "Responsive Design", "Figma"],
  },
  {
    id: 2,
    href: "https://take-transfer.com",
    image: "/images/TT.webp",
    category: "Дизайн + Розробка",
    title: "Take Transfer",
    description: "Продакшн-платформа бронювання трансферів з онлайн-оплатою та ролями для керування операційними процесами.",
    technologies: ["UX/UI Design", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: 3,
    href: "https://www.medicspot.co.uk",
    image: "/images/medicspot.webp",
    category: "Дизайн + Розробка",
    title: "Medicspot",
    description:
      "Британська веб-платформа для онлайн-медичних сервісів з персоналізованими сценаріями взаємодії.",
      technologies: ["UX/UI Design", "Next.js", "Node.js", "PostgreSQL", "API"],
  },
  {
    id: 4,
    href: "https://www.stickylemon.nl",
    image: "/images/medicspot.webp",
    category: "Дизайн + Розробка",
    title: "Sticky Lemon",
    description:
      "E-commerce сайт нідерландського бренду з каталогом товарів та зручним UX для покупок.",
    technologies: ["E-commerce", "UI/UX Design", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 5,
    href: "https://www.chargo.io",
    image: "/images/chargo.webp",
    category: "Дизайн + Розробка",
    title: "CharGo",
    description:
      "Веб-платформа сервісу оренди портативних зарядних станцій з інтеграцією фізичних локацій.",
    technologies: ["UX/UI Design", "React", "API Integration", "Location Services"],
  },
  {
    id: 6,
    href: "https://oomen.com",
    image: "/images/oomen.webp",
    category: "Дизайн + Розробка",
    title: "Oomen",
    description:
      "Корпоративний сайт компанії з послуг переїзду та зберігання з багатомовною структурою.",
    technologies: ["UX/UI Design", "Responsive Web", "SEO", "Multi-language"],
  }
]

export default function Cases() {
  return (
    <section className="cases wrapper-sm" id="cases">
      <Title>Наші кейси</Title>

      <div className="row g-0 case-cards-list">
        {cases.map((item) => (
          <CaseCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
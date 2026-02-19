'use client'

import { useState, useRef, useEffect } from 'react'
import Title from "../Title/Title"
import "./FAQ.sass"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "З якими технологіями ви працюєте?",
      answer:
        "Працюємо з сучасним стеком: React / Native, Vue.js, Angular, Next.js, Node.js, NestJS, WordPress, PostgreSQL, Redis, Docker, AWS та іншими рішеннями під задачу.",
    },
    {
      question: "Працюєте з ФОП?",
      answer:
      "Так. Працюємо офіційно з ФОП за договором, що гарантує прозорість та безпеку співпраці: фіксуємо етапи, терміни та результат. Після запуску надаємо гарантійний період на виправлення помилок.",
    },
    {
      question: "Берете проєкти «під ключ»?",
      answer:
        "Так. Закриваємо повний цикл: аналітика, дизайн, розробка, тестування, запуск і підтримка.",
    },
    {
      question: "Ви робите тільки сайти чи складніші проєкти теж?",
      answer:
        "Робимо не лише сайти. Беремось за платформи, сервіси, мобільні додатки, особисті кабінети, CRM, інтеграції та нестандартні рішення.",
    },
    {
      question: "Чи надаєте підтримку після запуску?",
      answer:
        "Так. Можемо супроводжувати продукт після релізу, вносити правки та розвивати функціонал.",
    },
    {
      question: "Чи можна почати з невеликого MVP?",
      answer:
        "Так. Допоможемо спланувати MVP, щоб швидко перевірити ідею без зайвих витрат.",
    },
    {
      question: "Які терміни розробки?",
      answer:
      "Залежать від обсягу та складності проєкту. Після обговорення задачі даємо реалістичні терміни без казок.",
    },
    {
      question: "Можлива оплата в криптовалюті?",
      answer:
      "Так, приймаємо оплату в крипті. Деталі узгоджуємо під час обговорення проєкту.",
    },
    {
      question: "Працюєте з іноземними клієнтами?",
      answer:
      "Так, працюємо з клієнтами з України та з-за кордону.",
    },
    {
      question: "Чи підписуєте NDA?",
      answer: "Так, при необхідності - підписуємо NDA та працюємо з конфіденційними проєктами.",
    },
  ]

  return (
    <section className="faq wrapper-sm">
      <Title>Часті запитання</Title>
      <div className="faq-content">
        {faqs.map((item, i) => (
          <FaqItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onClick={() =>
              setOpenIndex(openIndex === i ? null : i)
            }
          />
        ))}
      </div>
    </section>
  )
}

function FaqItem({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div
        className="faq-title-arrow d-flex items-center flex-between"
        onClick={onClick}
      >
        <h3>{question}</h3>
        <span className={isOpen ? "open" : ""}></span>
      </div>
      <div
        className="faq-content"
        ref={contentRef}
        style={{ height: `${height}px` }}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}
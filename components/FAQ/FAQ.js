'use client'

import { useState, useRef, useEffect } from 'react'
import Title from "../Title/Title"
import "./FAQ.sass"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Скільки коштує проєкт і як відбувається оплата?",
      answer:
        "Термін розробки сайту залежить від його складності та обсягу функціоналу. Зазвичай це займає від 4 до 12 тижнів.",
    },
    {
      question: "Які технології ви використовуєте?",
      answer: "Ми працюємо з React, Node.js, Next.js, Figma та іншими сучасними інструментами.",
    },
    {
      question: "Чи є підтримка після запуску?",
      answer: "Так, ми надаємо підтримку та оновлення після запуску проєкту.",
    },
    {
      question: "Скільки коштує проєкт і як відбувається оплата?",
      answer:
        "Термін розробки сайту залежить від його складності та обсягу функціоналу. Зазвичай це займає від 4 до 12 тижнів.",
    },
    {
      question: "Які технології ви використовуєте?",
      answer: "Ми працюємо з React, Node.js, Next.js, Figma та іншими сучасними інструментами.",
    },
    {
      question: "Чи є підтримка після запуску?",
      answer: "Так, ми надаємо підтримку та оновлення після запуску проєкту.",
    },
    {
      question: "Які технології ви використовуєте?",
      answer: "Ми працюємо з React, Node.js, Next.js, Figma та іншими сучасними інструментами.",
    },
    {
      question: "Чи є підтримка після запуску?",
      answer: "Так, ми надаємо підтримку та оновлення після запуску проєкту.",
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
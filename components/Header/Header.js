'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false)

  useEffect(() => {
    if (burgerOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.width = ''
    }
  }, [burgerOpen])

  const handleNavClick = () => {
    setBurgerOpen(false)
  }

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    const headerOffset = 120
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header className="header">
        <div className="wrapper flex-between items-center relative">
          <a onClick={scrollToTop} className="logo">
            <Image
              src="/images/logo.svg"
              alt="Логотип агенції з веб-розробки GRINDev"
              fill
              priority
            />
          </a>

          <nav>
            <li><a onClick={scrollToTop}>Головна</a></li>
            <li><a onClick={() => scrollToId('cases')}>Наші кейси</a></li>
            <li><a onClick={() => scrollToId('services')}>Послуги</a></li>
          </nav>

          <div className="lang-switcher-and-btn items-center">
            <Button variant="primary-arrow" className="header-btn">
              ОБГОВОРИТИ ПРОЄКТ
            </Button>

            <div
              className="burger-menu-icon"
              onClick={() => setBurgerOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <div className={`burger-menu ${burgerOpen ? 'active' : ''}`}>
        <div className="wrapper burger-menu-top relative">
          <div
            className="burger-menu-close"
            onClick={() => setBurgerOpen(false)}
          ></div>
        </div>

        <div className="wrapper burger-menu-content">
          <nav>
            <li>
              <a onClick={() => { scrollToTop(); handleNavClick() }}>
                Головна
              </a>
            </li>
            <li>
              <a onClick={() => { scrollToId('cases'); handleNavClick() }}>
                Наші кейси
              </a>
            </li>
            <li>
              <a onClick={() => { scrollToId('services'); handleNavClick() }}>
                Послуги
              </a>
            </li>
          </nav>

          <Button
            variant="primary-arrow"
          >
            ОБГОВОРИТИ ПРОЄКТ
          </Button>

          <div className="d-flex socials-row">
            <a href="tel:+380735655611" className='tel'>+38 (073) 565-56-11</a>
            <a href='https://www.instagram.com/grindev.agency' className='inst'>@grindev.agency</a>
          </div>
        </div>
      </div>
    </>
  )
}
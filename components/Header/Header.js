'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="wrapper flex-between items-center relative">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.svg"
              alt="Логотип агенції з веб-розробки GRINDev"
              fill
              priority
            />
          </Link>

          <nav>
            <li><Link href="/">Головна</Link></li>
            <li><Link href="#cases">Наші кейси</Link></li>
            <li><Link href="#services">Послуги</Link></li>
          </nav>

          <div className="lang-switcher-and-btn items-center">
            <a href="#" className="lang-switcher">UA</a>
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
            <li><Link href="/">Головна</Link></li>
            <li><Link href="/portfolio">Наші кейси</Link></li>
            <li><Link href="/project">Послуги</Link></li>
          </nav>
          <Button variant="primary-arrow">
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
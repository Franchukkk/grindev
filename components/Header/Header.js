'use client'

import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper flex-between items-center">
        <Link href="/" className="logo">
        <Image
          src="/images/logo.svg"
          alt="Логотип агенції з веб-розробки GRINDev"
          fill
          priority
        /></Link>
        <nav>
          <Link href="/">Головна</Link>
          <Link href="/portfolio">Наші кейси</Link>
          <Link href="/project">Послуги</Link>
        </nav>
        <div className="lang-switcher-and-btn items-center">
          <a href="#" className="lang-switcher">UA</a>
          <Button variant="primary-arrow">ОБГОВОРИТИ ПРОЄКТ</Button>
        </div>
      </div>
    </header>
  )
}

'use client'

import './Footer.sass'
import Link from 'next/link'
import Button from '../Button/Button'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-logo flex-between">
            <div className="footer-logo-image"><img src="/images/logo.svg" alt="Logo" /></div>
            <nav>
              <ul className='flex-between'>
                <li>
                  <Link href="/">Головна</Link>
                </li>
                <li>
                  <Link href="/">Наші кейси</Link>
                </li>
                <li>
                  <Link href="/">Послуги</Link>
                </li>
              </ul>
            </nav>
            <Button variant='primary-tg'>ОБГОВОРИТИ ПРОЄКТ</Button>
          </div>
          <div className="d-flex socials-row">
            <a href="tel:+380735655611" className='tel'>+38 (073) 565-56-11</a>
            <a href='https://www.instagram.com/grindev.agency' className='inst'>@grindev.agency</a>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>&copy; Створено командою GRINDev</p>
        </div>
      </div>
      
    </footer>
  )
}

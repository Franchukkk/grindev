'use client'

import './Footer.sass'
import Link from 'next/link'
import Button from '../Button/Button'

export default function Footer() {
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
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-logo flex-between">
            <div className="footer-logo-image">
              <a onClick={scrollToTop}>
                <img src="/images/logo.svg" alt="Logo" />
              </a>
            </div>

            <nav>
              <ul className="flex-between">
                <li>
                  <a onClick={scrollToTop}>Головна</a>
                </li>
                <li>
                  <a onClick={() => scrollToId('cases')}>Наші кейси</a>
                </li>
                <li>
                  <a onClick={() => scrollToId('services')}>Послуги</a>
                </li>
              </ul>
            </nav>

            <Button variant="primary-tg">ОБГОВОРИТИ ПРОЄКТ</Button>
          </div>

          <div className="d-flex socials-row">
            <a href="tel:+380735655611" className="tel">
              +38 (073) 565-56-11
            </a>
            <a
              href="https://www.instagram.com/grindev.agency"
              className="inst"
              target="_blank"
              rel="noopener noreferrer"
            >
              @grindev.agency
            </a>
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
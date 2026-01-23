'use client'

import './ServicesSection.sass'
import Title from '../Title/Title'
import Button from '../Button/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="services wrapper-sm">
        <Title>Послуги</Title>
        <div className="flex-between items-center services-cta">
            <h3>Як <span className='text-bold'>ми</span> виведемо <span className='text-bold'>ваш</span> бізнес на новий рівень</h3>
            <Button variant="primary-arrow">ОБГОВОРИТИ ПРОЄКТ</Button>
        </div>
        <div className="services-list flex-between">
            <div>
                <Image className="technologies-circle" src={'/images/technologies.svg'} width={300} height={300} style={{ width: '100%', height: 'auto' }} alt='technologies'></Image>
            </div>
            
            <table className="services-table">
                <tbody>
                    <tr>
                        <td>
                            <div className="flex-between items-center">
                                <div>
                                    <h3>Розробка</h3>
                                    <ul>
                                        <li>Сайти</li>
                                        <li>Веб-платформи</li>
                                        <li>Web-додатки</li>
                                        <li>Адмін-панелі</li>
                                        <li>Інтеграції</li>
                                    </ul>
                                </div>
                                <Link href="#"></Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex-between items-center">
                                <div>
                                    <h3>Дизайн</h3>
                                    <ul>
                                        <li>Веб продуктів</li>
                                        <li>Мобільних продуктів</li>
                                        <li>Адаптивні інтерфейси</li>
                                    </ul>
                                </div>
                                <Link href="#"></Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex-between items-center">
                                <div>
                                    <h3>Просування</h3>
                                    <ul>
                                        <li>SEO</li>
                                        <li>Google Ads</li>
                                        <li>Аналітика</li>
                                        <li>Оптимізація</li>
                                        <li>Розвиток продукту</li>
                                    </ul>
                                </div>
                                <Link href="#"></Link>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

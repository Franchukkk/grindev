'use client'

import Image from 'next/image'
import Link from 'next/link'
import './CaseCard.sass'

export default function CaseCard() {
  return (
    <Link href={'#'} className='col-12 col-md-6 col-lg-4'>
        <figure className='case-card'>
            <div className="image-wrapper">
                <Image
                    src="/images/project-preview.jpg"
                    alt="Project preview"
                    fill
                    sizes="100%"
                    style={{ objectFit: 'cover', paddingBottom: '0.8125rem' }}
                />
            </div>
            <figcaption>
                <span className="case-category">Розробка</span>
                <h3>Take Transfer</h3>
                <p>Повна розробка платформи бронювання трансферів</p>
                <div className="bottom-case-line flex-between">
                    <div className="case-technologies">
                        <div className="case-technology">UX/UI Design</div>
                        <div className="case-technology">React</div>
                        <div className="case-technology">Node.js</div>
                        <div className="case-technology">Stripe</div>
                    </div>
                    <span href="#" className="case-link-arrow"></span>
                </div>
            </figcaption>
        </figure>
    </Link>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import './CaseCard.sass'

export default function CaseCard({
  href,
  image,
  category,
  title,
  description,
  technologies = [],
}) {
  return (
    <Link href={href} className="col-12 col-md-6 col-lg-4">
      <figure className="case-card">
        <div className="image-wrapper">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100%"
            style={{ objectFit: 'contain', paddingBottom: '0.8125rem', objectPosition: 'center' }}
          />
        </div>

        <figcaption>
          <span className="case-category">{category}</span>
          <h3>{title}</h3>
          <p>{description}</p>

          <div className="bottom-case-line flex-between">
            <div className="case-technologies">
              {technologies.map((tech, i) => (
                <div key={i} className="case-technology">
                  {tech}
                </div>
              ))}
            </div>

            <span className="case-link-arrow" />
          </div>
        </figcaption>
      </figure>
    </Link>
  )
}
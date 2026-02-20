'use client'

import styles from './Button.module.sass'

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href = 'https://t.me/grindev_agency',
  onClick,
  ...props
}) {
  const buttonClass = `
    ${styles.button}
    ${styles[variant]}
    ${className}
    items-center
  `

  if (onClick) {
    return (
      <button
        type="button"
        className={buttonClass}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <a href={href} className={buttonClass} {...props}>
      {children}
    </a>
  )
}
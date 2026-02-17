import styles from './Button.module.sass'

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const buttonClass = `
    ${styles.button}
    ${styles[variant]}
    ${className}
    items-center
  `

  return (
    <a href='https://t.me/grindev_agency' className={buttonClass} {...props}>
      {children}
    </a>
  )
}
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
    <a href='#' className={buttonClass} {...props}>
      {children}
    </a>
  )
}
'use client'
import './Title.sass'

export default function Title({ children, className = '' }) {
  return (
    <h2 className={`title ${className}`}>
      {children}
    </h2>
  )
}
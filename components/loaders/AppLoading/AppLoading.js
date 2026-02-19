// components/loaders/AppLoading/AppLoading.jsx
'use client'
import './AppLoading.css'

export default function AppLoading() {
  return (
    <div className="app-loading">
      <div className="loader"></div>
      <h2>
        Виводимо ваш бізнес на новий рівень
        <span className="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </h2>
    </div>
  )
}
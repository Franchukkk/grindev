import '@/styles/globals.sass'
import '@/styles/fonts.sass'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BackgroundBlobs from '@/components/BackgroundBlobs/BackgroundBlobs'
import '@/components/Header/Header.sass'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

export const metadata = {
  title: 'GRINDev - агенція веб-розробки',
  description: 'Агенція веб-розробки GRINDev спеціалізується на створенні сучасних, адаптивних та ефективних веб-сайтів і додатків для бізнесу будь-якого масштабу.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <BackgroundBlobs />
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}

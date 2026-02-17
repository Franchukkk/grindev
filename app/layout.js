import '@/styles/globals.sass'
import '@/styles/fonts.sass'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BackgroundBlobs from '@/components/BackgroundBlobs/BackgroundBlobs'
import '@/components/Header/Header.sass'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

export const metadata = {
  metadataBase: new URL('https://grindev.agency'),
  title: 'GRINDev - агенція веб-розробки',
  description: 'Агенція веб-розробки GRINDev спеціалізується на створенні сучасних, адаптивних та ефективних веб-сайтів і додатків для бізнесу будь-якого масштабу.',

  alternates: {
    canonical: 'https://grindev.agency',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  keywords: [
    'веб-розробка',
    'створення сайтів',
    'розробка сайтів під ключ',
    'web development agency',
    'створення інтернет-магазинів',
    'створення сайтів для бізнесу',
    'GRINDev',
  ],

  authors: [{ name: 'GRINDev', url: 'https://grindev.agency' }],
  creator: 'GRINDev',
  publisher: 'GRINDev',

  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },

  manifest: '/favicon/site.webmanifest',

  openGraph: {
    title: 'GRINDev - агенція веб-розробки',
    description: 'Агенція веб-розробки GRINDev спеціалізується на створенні сучасних, адаптивних та ефективних веб-сайтів і додатків для бізнесу будь-якого масштабу.',
    images: ['/og.jpg'],
    type: 'website',
    locale: 'uk_UA',
    url: 'https://grindev.agency',
    siteName: 'GRINDev',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GRINDev - агенція веб-розробки',
    description: 'Агенція веб-розробки GRINDev спеціалізується на створенні сучасних, адаптивних та ефективних веб-сайтів і додатків для бізнесу будь-якого масштабу.',
    images: ['/og.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  themeColor: '#0f172a', // опціонально
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

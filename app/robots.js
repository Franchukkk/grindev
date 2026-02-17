export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: 'https://grindev.agency/sitemap.xml',
    }
  }
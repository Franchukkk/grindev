export default function sitemap() {
    const baseUrl = 'https://grindev.agency'
  
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/cases`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contacts`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      },
    ]
  }
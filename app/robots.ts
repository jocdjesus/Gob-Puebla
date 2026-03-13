import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_next/',
        '/api/',
        '/components/',
        '/hooks/',
        '/lib/',
      ],
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
  }
}
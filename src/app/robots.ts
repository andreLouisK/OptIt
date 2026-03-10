import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Legg til stier du vil skjule for Google
    },
    sitemap: 'https://optit.no/sitemap.xml',
  }
}
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://optit.no'

  // Her definerer du de faste rutenene dine
  const routes = [
    '',
    '/tjenester',
    '/om-oss',
    '/kontakt',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8, // Forsiden får høyest prioritet
  }))

  return [...routes]
}
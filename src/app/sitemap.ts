import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://optit.no'

  // Oversikt over alle faste sider
  const staticRoutes = [
    '',
    '/tjenester',
    '/om-oss',
    '/kontakt',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Spesifikke undersider for tjenester
  const serviceRoutes = [
    '/tjenester/cad',
    '/tjenester/plm',
    '/tjenester/integrasjon',
    '/tjenester/cam',
    '/tjenester/ai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const, // Ofte litt høyere frekvens på tjenester
    priority: 0.9, // Disse er viktige landingssider, så vi gir dem høy prioritet
  }))

  return [...staticRoutes, ...serviceRoutes]
}
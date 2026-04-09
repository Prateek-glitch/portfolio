export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://prateek-portfolio-kappa.vercel.app/sitemap.xml',
  }
}

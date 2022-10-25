/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://api-blue-archive.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
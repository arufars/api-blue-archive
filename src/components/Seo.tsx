import Head from "next/head"

const Seo: React.FC = () => {
  return (
    <Head>
      <title>Rest Api Blue Archive</title>
      <meta name='description' content='Rest Api Blue Archive' />
      <meta name='keywords' content='rest-api api free blue archive' />
      <meta content='rest api blue archive' property='og:description' />
      <meta content='Rest Api Blue Archive ' property='og:title' />
      <meta content='Rest Api Blue Archive' property='og:site_name' />
      <meta content='website' property='og:type' />
      <meta content='https://rest-api-blue-archive.vercel.app/' property='og:url' />
      <meta content='https://rest-api-blue-archive.vercel.app/arona.ico' property='og:image' />
      <meta
        content='https://rest-api-blue-archive.vercel.app/arona.ico'
        property='og:image:secure_url'
      />
      <meta content='image/png' property='og:image:type' />
      <meta content='600' property='og:image:width' />
      <meta content='600' property='og:image:height' />
      <meta content='summary_large_image' name='twitter:card' />
      <meta content='@arufars' name='twitter:site' />
      <meta content='@arufars' name='twitter:creator' />
      <meta content='Rest Api Blue Archive' name='twitter:title' />
      <meta content='Rest Api Blue Archive' name='twitter:description' />
      <meta name="google-site-verification" content="J4xBxwf8ttQKwxN-2biYOU7M80cIqVwitp9yVb7o-Z0" />

      <link rel='icon' href='/arona.ico' />
    </Head>
  )
}

export default Seo

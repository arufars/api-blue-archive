import Head from "next/head"

const Seo: React.FC = () => {
  return (
    <>
      <Head>
        <title>REST API Blue Archive</title>
        <meta name="description" content="API Blue Archive, REST API Blue Archive, Blue Archive"/>
        <meta name='keywords' content='rest-api api free blue archive' />
        <meta content='REST API Blue Archivee' property='og:description' />
        <meta content='REST API Blue Archive ' property='og:title' />
        <meta content='REST API Blue Archive' property='og:site_name' />
        <meta content='website' property='og:type' />
        <meta content='https://api-blue-archive.vercel.app/' property='og:url' />
        <meta content='https://api-blue-archive.vercel.app/arona.ico' property='og:image' />
        <meta
          content='https://api-blue-archive.vercel.app/arona.ico'
          property='og:image:secure_url'
        />
        <meta content='image/png' property='og:image:type' />
        <meta content='600' property='og:image:width' />
        <meta content='600' property='og:image:height' />
        <meta content='summary_large_image' name='twitter:card' />
        <meta content='@arufars' name='twitter:site' />
        <meta content='@arufars' name='twitter:creator' />
        <meta content='REST API Blue Archive' name='twitter:title' />
        <meta content='REST API Blue Archive' name='twitter:description' />

        <link rel='icon' href='/arona.ico' />
      </Head>
    </>
  )
}

export default Seo

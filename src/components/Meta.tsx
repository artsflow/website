import Head from 'next/head'

const defaultUrl = 'http://artsflow.com'
const defaultTitle = 'Artsflow - the platform for the Arts Sector'

const defaultDescription =
  'Artsflow is a tailor-made platform for the Arts Sector enabling creative practitioners to easily create, book, deliver and earn a living from their passion.'

export function Meta({ title = defaultTitle, description = defaultDescription, url = defaultUrl }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${url}/img/hero.png`} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

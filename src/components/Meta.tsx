import Head from 'next/head'

import { ARTSFLOW_URL } from 'lib/config'

const defaultTitle = 'Artsflow - the platform for the Arts Sector'

const defaultDescription =
  'Artsflow is a tailor-made platform for the Arts Sector enabling creative practitioners to easily create, book, deliver and earn a living from their passion.'

const defaultImage = `${ARTSFLOW_URL}/img/hero.png`

export function Meta({
  title = defaultTitle,
  description = defaultDescription,
  url = ARTSFLOW_URL,
  image = defaultImage,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

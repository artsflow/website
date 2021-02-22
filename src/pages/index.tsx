import React from 'react'
import Head from 'next/head'

import Landing from 'components/landing'

const url = 'http://preview.artsflow.com'
const title = 'Artsflow - the platform for the arts sector'

const description =
  'Artsflow is a tailor-made platform for the Arts Sector enabling creative practitioners to easily create, book, deliver and earn a living from their passion.'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${url}/img/hero-image.png`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
    </>
  )
}

import React from 'react'
import Head from 'next/head'

import Landing from 'components/landing'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Artsflow</title>
      </Head>
      <Landing />
    </>
  )
}

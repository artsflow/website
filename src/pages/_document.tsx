import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { GoogleTagManager } from 'lib/gtm'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <GoogleTagManager />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <style>
          {`
            #__next { height: 100% }
          `}
        </style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

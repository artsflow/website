import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { GoogleTagManager } from 'lib/gtm'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="preload" as="style" type="text/css" href="/nprogress.css" />

          <link rel="preload" href="/fonts/Manrope-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Manrope-SemiBold.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Manrope-Bold.ttf" as="font" crossOrigin="" />

          <GoogleTagManager />
        </Head>
        <style>
          {`
            #__next { height: 100% }
            body {
              font-family: "Manrope", sans-serif;
            }
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

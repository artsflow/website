import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as snippet from '@segment/snippet'
import Script from 'next/script'

import { SEGMENT_KEY } from 'lib/config'

export default class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      host: 'cdn.artsflow.link',
      apiKey: SEGMENT_KEY,
      page: true,
    }

    if (process.env.NODE_ENV === 'development') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

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

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <Script
            dangerouslySetInnerHTML={{ __html: this.renderSnippet() }}
            strategy="beforeInteractive"
          />
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "bd642cc7908340e2bd5708e89639e30a"}'
            strategy="beforeInteractive"
          />
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

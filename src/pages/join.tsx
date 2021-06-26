import React from 'react'
import { useRouter } from 'next/router'

import { Meta } from 'components'

export default function Join(): JSX.Element {
  const { query } = useRouter()
  const { utm_source: utmSource } = query

  return (
    <>
      <Meta title="Join Artsflow" />
      <iframe
        title="typeform"
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src={`https://artsflow.typeform.com/to/TfwEbics?utm_source=${utmSource}`}
      />
      <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    </>
  )
}

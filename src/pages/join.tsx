import React from 'react'
import { useRouter } from 'next/router'

export default function Home(): JSX.Element {
  const { query } = useRouter()
  const { src } = query
  console.log(query)

  return (
    <>
      <iframe
        title="typeform"
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src={`https://form.typeform.com/to/bnKnqrBe?typeform-medium=embed-snippet#src=${src}`}
      />
      <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    </>
  )
}

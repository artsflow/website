import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import ChakraUIRenderer from './ChakraUIRenderer'

export const MD = (source: any) => (
  <ReactMarkdown
    children={source}
    renderers={ChakraUIRenderer()}
    plugins={[gfm]}
    escapeHtml={false}
    linkTarget="_blank"
  />
)

export const hotJar = (userId: string, utmSource = '') => {
  // @ts-ignore
  if (window && window?.hj)
    // @ts-ignore
    window.hj('identify', userId, {
      utmSource,
    })
}
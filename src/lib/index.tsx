import ReactMarkdown from 'react-markdown'

import ChakraUIRenderer from './ChakraUIRenderer'

export const MD = (source: any) => (
  <ReactMarkdown
    children={source}
    renderers={ChakraUIRenderer()}
    escapeHtml={false}
    linkTarget="_blank"
  />
)

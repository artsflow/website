import { Heading, VStack } from '@chakra-ui/react'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser'

export const Title = ({ text, ...rest }: any) => (
  <Heading mb="1rem" {...rest}>
    {text}
  </Heading>
)

export const Description = ({ text }: any) => {
  return (
    <VStack
      alignItems="flex-start"
      pb="1rem"
      sx={{
        h3: { fontWeight: 'semibold', fontSize: 'lg' },
        'ul, ol': { pl: '2rem' },
        blockquote: {
          bg: 'rgba(0, 0, 0, 0.05)',
          p: '1rem',
          borderLeft: '4px solid #ccc',
          quotes: '-',
          w: 'full',
        },
        'blockquote:before': {
          color: '#ccc',
          content: 'open-quote',
          fontSize: '4em',
          lineHeight: '0.1em',
          mr: '0.25em',
          verticalAlign: '-0.4em',
        },
        'blockquote p': {
          display: 'inline',
          fontStyle: 'italic',
        },
      }}
    >
      {ReactHtmlParser(text, { transform })}
    </VStack>
  )
}

const transform = (node: any, index: number) => {
  if (node.type === 'tag' && node.name === 'a') {
    const newNode = { ...node, name: 'span', attribs: { ...node.attribs, href: null } }
    return convertNodeToElement(newNode, index, transform)
  }
  return convertNodeToElement(node, index, transform)
}

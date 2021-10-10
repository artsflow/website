import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Link, List, Box } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

import { trackWebminarPlay, trackWebminarEnd } from 'analytics'
import ChakraUIRenderer, { defaults, getCoreProps } from './ChakraUIRenderer'

export const MD = (source: any) => (
  <ReactMarkdown
    children={source}
    renderers={ChakraUIRenderer()}
    plugins={[gfm]}
    escapeHtml={false}
    linkTarget="_blank"
  />
)

const articleDefaults = {
  ...defaults,
  list: (props: any) => {
    const { start, ordered, children, depth } = props
    const attrs = getCoreProps(props)
    if (start !== null && start !== 1 && start !== undefined) {
      // @ts-ignore
      attrs.start = start.toString()
    }
    let styleType = 'disc'
    if (ordered) styleType = 'decimal'
    if (depth === 1) styleType = 'circle'
    return (
      <List spacing={4} as={ordered ? 'ol' : 'ul'} styleType={styleType} pl={4} mb={4} {...attrs}>
        {children}
      </List>
    )
  },
  link: (props: any) => {
    const { node } = props
    if (node.type === 'link' && node.url.startsWith('https://www.youtube.com/')) {
      return <Player url={node.url} title={node.title} />
    }
    return <Link textDecoration="underline" rel="nofollow" {...props} />
  },
  blockquote: ({ children }: any) => (
    <Box borderLeft="4px solid #ccc" my="1rem" p={2}>
      {children}
    </Box>
  ),
}

export const MDArticle = (source: string) => (
  <ReactMarkdown
    children={source}
    renderers={ChakraUIRenderer(articleDefaults)}
    plugins={[gfm]}
    escapeHtml={false}
    linkTarget="_blank"
  />
)

export const Player = ({ url, title }: any) => {
  const handlePlayVideo = () => {
    trackWebminarPlay({ url, title })
  }

  const handleEndVideo = () => {
    trackWebminarEnd({ url, title })
  }

  return (
    <Box
      m="0 auto"
      my="2rem"
      w="full"
      maxW="800px"
      h={['180px', '450px']}
      bg="teal.100"
      pos="relative"
    >
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        onPlay={handlePlayVideo}
        onEnded={handleEndVideo}
      />
    </Box>
  )
}

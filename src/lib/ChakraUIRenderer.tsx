import React from 'react'
import {
  Text,
  Code,
  Divider,
  Link,
  List,
  Checkbox,
  ListItem,
  Heading,
  Image,
} from '@chakra-ui/react'

export const getCoreProps = (props: any) =>
  props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {}

export const defaults = {
  paragraph: ({ children }: any) => <Text mb={2}>{children}</Text>,
  emphasis: ({ children }: any) => <Text as="em">{children}</Text>,
  blockquote: ({ children }: any) => <Code p={2}>{children}</Code>,
  code: (props: any) => {
    const { language, value } = props
    const className = language && `language-${language}`
    return (
      <pre {...getCoreProps(props)}>
        <Code p={2} className={className || null}>
          {value}
        </Code>
      </pre>
    )
  },
  delete: ({ children }: any) => <Text as="del">{children}</Text>,
  thematicBreak: Divider,
  link: (props: any) => <Link textDecoration="underline" rel="nofollow" {...props} />,
  img: Image,
  linkReference: Link,
  imageReference: Image,
  text: ({ children }: any) => <Text as="span">{children}</Text>,
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
  listItem: (props: any) => {
    const { children, checked } = props
    let checkbox = null
    if (checked !== null && checked !== undefined) {
      checkbox = (
        <Checkbox isChecked={checked} isReadOnly>
          {children}
        </Checkbox>
      )
    }
    return (
      <ListItem {...getCoreProps(props)} listStyleType={checked !== null ? 'none' : 'inherit'}>
        {checkbox || children}
      </ListItem>
    )
  },
  definition: () => null,
  heading: (props: any) => {
    const { level, children } = props
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
    return (
      // @ts-ignore
      <Heading my={4} as={`h${level}`} size={sizes[`${level - 1}`]} {...getCoreProps(props)}>
        {children}
      </Heading>
    )
  },
  inlineCode: (props: any) => {
    const { children } = props
    return <Code {...getCoreProps(props)}>{children}</Code>
  },
}

function ChakraUIRenderer(theme = defaults) {
  return {
    paragraph: theme.paragraph,
    emphasis: theme.emphasis,
    blockquote: theme.blockquote,
    code: theme.code,
    delete: theme.delete,
    thematicBreak: theme.thematicBreak,
    link: theme.link,
    img: theme.img,
    linkReference: theme.linkReference,
    imageReference: theme.imageReference,
    text: theme.text,
    list: theme.list,
    listItem: theme.listItem,
    definition: theme.definition,
    heading: theme.heading,
    inlineCode: theme.inlineCode,
  }
}

export default ChakraUIRenderer

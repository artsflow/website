import { Text, Heading } from '@chakra-ui/react'

export const Title = ({ text, ...rest }: any) => (
  <Heading mb="1rem" {...rest}>
    {text}
  </Heading>
)

export const Description = ({ text }: any) => {
  return text.split('\n').map((line: string, i: number) => (
    <Text color="#616167" key={i} overflowWrap="anywhere" mb="1rem">
      {line}
    </Text>
  ))
}

export const WhatToBring = ({ text }: any) => {
  const content = text.split('\n').map((line: string, i: number) => (
    <Text color="#616167" key={i} overflowWrap="anywhere" mb="1rem">
      {line}
    </Text>
  ))

  return (
    <>
      <Heading as="h2" fontSize="xl" mt="2rem" mb="1rem">
        What to bring
      </Heading>
      {content}
    </>
  )
}

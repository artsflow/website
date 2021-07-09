import React from 'react'
import { VStack, Text, Heading } from '@chakra-ui/react'

import { Meta } from 'components'

export default function About(): JSX.Element {
  return (
    <>
      <Meta title="About Artsflow" />
      <VStack
        bg="#edf8fa"
        px="2rem"
        textAlign="center"
        spacing="1.5rem"
        py={['20px', '130px']}
        pos="relative"
      >
        <Heading size="2xl" color="#484848">
          The origins of Artsflow...
        </Heading>
        <Text color="#616167" maxW="900px" fontSize="xl">
          <b>James</b> was working on his business Creative Minds and <b>Radu</b> was a contractor
          for tech start-ups. They were on completely different paths until they crossed in
          September 2020.
        </Text>
        <Text color="#616167" maxW="900px" fontSize="lg">
          With a shared passion for the arts, a desire to empower people and to make the arts
          accessible to everyone they started Artsflow, a web & mobile app events platform for the
          arts & cultural sector.
        </Text>
      </VStack>
    </>
  )
}

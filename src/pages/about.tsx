import React from 'react'
import { VStack, Text, Heading } from '@chakra-ui/react'

import { Meta, Dot } from 'components'

export default function About(): JSX.Element {
  return (
    <>
      <Meta title="About Artsflow" />
      <VStack
        bg="#edf8fa"
        px="2rem"
        textAlign="center"
        spacing="1.5rem"
        py={['40px', '130px']}
        pos="relative"
      >
        <Heading size="xl" color="#484848">
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
        <Dot bg="#3176EE" w="1rem" h="1rem" top={['80px', '50px']} left={['50px', '100px']} />
        <Dot
          border="8px solid #F9D278"
          top={['-50px', '70px']}
          right={['20px', 'auto']}
          left={['auto', '120px']}
        />
        <Dot bg="#F4B7C4" w="30px" h="30px" bottom={['80px', '50px']} left={['-10px', '350px']} />
        <Dot
          bg="#F4B7C4"
          w="1rem"
          h="1rem"
          top={['-20px', '0px']}
          right={['auto', '180px']}
          left={['30px', 'auto']}
        />
        <Dot bg="#3176EE" w="1rem" h="1rem" display={['none', 'block']} right="130px" top="250px" />
        <Dot
          bg="#F9D278"
          w="1rem"
          h="1rem"
          bottom={['30px', '140px']}
          right={['50px', '40px']}
          left={['auto', 'auto']}
        />
      </VStack>
      <VStack minH="400px">
        <Text>rest of content goes here</Text>
      </VStack>
    </>
  )
}

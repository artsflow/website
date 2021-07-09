import React from 'react'
import { VStack, Stack, Text, Heading, Box } from '@chakra-ui/react'

import { Meta } from 'components'

export default function CreativeCorner(): JSX.Element {
  return (
    <>
      <Meta title="Creative Corner" />
      <VStack
        bg="#fef4f4"
        px="2rem"
        textAlign="center"
        spacing="1.5rem"
        pt={['40px', '130px']}
        pb={['80px', '130px']}
        pos="relative"
      >
        <Stack
          direction={['column', 'column', 'row']}
          maxW="1200px"
          w="full"
          justifyContent="space-between"
          spacing="2rem"
        >
          <VStack
            maxW={['auto', 'auto', '350px']}
            justifyContent="center"
            textAlign="center"
            spacing="1rem"
          >
            <Heading size="xl" color="#484848">
              Creative Corner
            </Heading>
            <Text color="#616167" maxW="900px" fontSize="xl">
              Find out how to <b>kickstart</b> your Creative Journey and more through our webinar
              series!
            </Text>
          </VStack>
          <Box
            bg="blue.100"
            w="full"
            maxW={['full', '750px']}
            maxH="450px"
            h={['220px', '450px']}
          />
        </Stack>
      </VStack>
      <VStack minH="400px">
        <Text>rest of content goes here</Text>
      </VStack>
    </>
  )
}

import React from 'react'
import { VStack, Stack, Text, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'

import { Meta } from 'components'
import HeroImg from '../../public/img/hero-why.webp'

export default function WhyArtsflow(): JSX.Element {
  return (
    <>
      <Meta title="Why Artsflow?" />
      <VStack
        bg="#fff9e7"
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
            textAlign={['center', 'center', 'left']}
            spacing="1rem"
          >
            <Heading size="xl" color="#484848">
              Share your passion for the arts
            </Heading>
            <Text color="#616167" maxW="900px" fontSize="xl">
              We’re here to help Creatives <b>connect</b> with their community and share their
              passion with others!
            </Text>
          </VStack>
          <Box
            display="grid"
            w="full"
            alignItems="center"
            maxW={['full', '750px']}
            maxH="450px"
            h={['220px', '450px']}
            pos="relative"
          >
            <Image
              src={HeroImg}
              layout="responsive"
              width={767}
              height={467}
              placeholder="blur"
              loading="lazy"
              alt="Why Artsflow?"
            />
          </Box>
        </Stack>
      </VStack>
      <VStack minH="600px" justifyContent="center">
        <Text>rest of content goes here</Text>
      </VStack>
    </>
  )
}

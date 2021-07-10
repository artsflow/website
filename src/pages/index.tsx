import React from 'react'
import { VStack, Text, Heading, Box, Spacer } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

import { GetStartedButton } from 'components'

export default function Home(): JSX.Element {
  const handlePlayVideo = () => {
    console.log('handlePlayVideo')
  }

  const handleEndVideo = () => {
    console.log('handleEndVideo')
  }

  return (
    <>
      <VStack
        bg="#edf8fa"
        px="2rem"
        textAlign={['left', 'center']}
        pt={['40px', '100px']}
        pos="relative"
      >
        <Text fontSize="20px" w="full" mb="1rem">
          👋 Welcome!
        </Text>
        <Heading as="h1" size="xl" color="#484848">
          Connect with your community!
        </Heading>
        <Text fontSize="xl" color="#616167" pb="2rem">
          Create wonderful activities and events, receive bookings, accept payments and share your
          passion for the arts.
        </Text>
        <GetStartedButton location="home" />
        <Spacer pt="2rem" />
        <Box
          w={['full', 'full', '800px']}
          bg="af.violet"
          roundedTop={['20px', '40px']}
          pos="absolute"
          bottom="0"
          h={['120px', '300px']}
        />
        <Box
          w={['full', 'full', '700px']}
          h={['180px', '395px']}
          bg="teal.100"
          pos="relative"
          mt="-4rem"
        >
          <ReactPlayer
            url="https://artsflow.wistia.com/medias/eh5fzr7igc"
            controls
            width="100%"
            height="100%"
            config={{ wistia: { options: { qualityMin: '1080', qualityControl: false } } }}
            onPlay={handlePlayVideo}
            onEnded={handleEndVideo}
          />
        </Box>
      </VStack>
      <VStack minH="600px" justifyContent="center">
        <Text>rest of content goes here</Text>
      </VStack>
    </>
  )
}

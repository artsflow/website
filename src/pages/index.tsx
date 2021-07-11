import React from 'react'
import { VStack, Text, Heading, Box, Spacer, Icon } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

import { GetStartedButton, Benefits } from 'components'
import SquaresSvg from 'svg/landing/squares.svg'
import CalendarSvg from 'svg/landing/calendar.svg'
import SendSvg from 'svg/landing/send.svg'
import CardSvg from 'svg/landing/card.svg'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'

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
      <VStack
        justifyContent="center"
        maxW="1000px"
        px="2rem"
        py={['4rem', '6rem']}
        m="auto"
        spacing={['1.5rem', '2rem']}
        textAlign="center"
        pos="relative"
      >
        <Icon
          as={CurledArrowSvg}
          w="120px"
          h="90px"
          pos="absolute"
          top="60px"
          left="80px"
          transform="scaleX(-1) rotate(-30deg)"
          display={['none', 'none', 'block']}
        />
        <Heading px="2rem">Finally, a platform for the arts!</Heading>
        <Text fontSize="lg">
          Artsflow is a tailor-made platform for the arts & cultural sector empowering creative
          practitioners and arts organisations (Creatives) enabling them to create activities and
          events, receive bookings and generate an income from their passion.
        </Text>
        <Text fontSize="lg">
          We want to help you to connect with people interested in the arts, so that you can share
          your passion with them.
        </Text>
        <Benefits data={benefits} pt={['3rem', '6rem']} />
      </VStack>
    </>
  )
}

const benefits = {
  1: {
    icon: SquaresSvg,
    title: 'Create your activities',
    description:
      'As a Creative you can create multiple activities and publish them so that people can discover them locally and nationally.',
  },
  2: {
    icon: CalendarSvg,
    title: 'Receive bookings',
    description:
      'Share your Activity Page with your clients and they can easily book you’re activity/event in a few clicks.',
  },
  3: {
    icon: SendSvg,
    title: 'Send newsletters',
    description:
      'Communicate with your clients by sharing upcoming events, send reminders, include video call links and more information. Connect with your client base more easily.',
  },
  4: {
    icon: CardSvg,
    title: 'Generate an income',
    description:
      'Earn an income by sharing your passion for the arts. Once you’ve delivered your activity you’ll receive your payment. Track your earnings and other metrics via the Dashboard.',
  },
}

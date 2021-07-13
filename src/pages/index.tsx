import React from 'react'
import { Stack, VStack, Text, Heading, Box, Spacer, Icon } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import Image from 'next/image'

import { GetStartedButton, Benefits, Dot } from 'components'
import SquaresSvg from 'svg/landing/squares.svg'
import CalendarSvg from 'svg/landing/calendar.svg'
import SendSvg from 'svg/landing/send.svg'
import CardSvg from 'svg/landing/card.svg'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import Scr1 from '../../public/img/scr1.webp'

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
        pt={['3rem', '5rem']}
        pos="relative"
      >
        <Dots />
        <Text fontSize="20px" w="full" pb={['2rem', '1rem']}>
          👋 Welcome!
        </Text>
        <Heading as="h1" size="xl" color="#484848" zIndex="2">
          Connect with your community!
        </Heading>
        <Text fontSize="xl" color="#616167" pb="2rem">
          Create wonderful activities and events, receive bookings and share your passion for the
          arts.
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
        overflow={['hidden', 'hidden', 'hidden', 'hidden', 'visible']}
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
        <Text fontSize="lg" textAlign={['left', 'center']}>
          Artsflow is a tailor-made platform for the arts & cultural sector empowering creative
          practitioners and arts organisations (Creatives) enabling them to create activities and
          events, receive bookings and generate an income from their passion.
        </Text>
        <Text fontSize="lg" textAlign={['left', 'center']}>
          We want to help you to connect with people interested in the arts, so that you can share
          your passion with them.
        </Text>

        <Benefits data={benefits} py={['3rem', '6rem']} />

        <Stack
          bg={['none', 'none', 'none', '#f1eff6']}
          rounded="50px"
          p={[0, 0, 0, '4rem']}
          w={['100%', '100%', '100%', '75%']}
          alignSelf="flex-start"
          pos="relative"
          direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        >
          <VStack
            alignItems="flex-start"
            textAlign="left"
            w={['100%', '100%', '100%', '60%']}
            mt={['4rem', '4rem', '4rem', 0]}
          >
            <Heading size="lg">Create your activities</Heading>
            <Text lineHeight="1.8rem">
              Easily create, publish and amend your arts activities in Artsflow.
            </Text>
            <Text lineHeight="1.8rem">
              Whether your delivering activities on a weekly basis, bi-monthly basis or delivering a
              6 week course, you can determine what activities you want to deliver and when.
            </Text>
          </VStack>
          <VStack
            pos={['relative', 'relative', 'relative', 'absolute']}
            top="1rem"
            left={[0, 0, 0, '55%']}
            w="full"
            bg={['#f1eff6', '#f1eff6', '#f1eff6', 'none']}
            rounded="50px"
            pt={['2rem', '2rem', '2rem', 0]}
          >
            <Image src={Scr1} placeholder="blur" loading="lazy" alt="Create your activities" />
          </VStack>
        </Stack>

        <Spacer py={['1rem', '1rem', '1rem', '4rem']} />

        <Stack
          bg={['none', 'none', 'none', '#fef5f8']}
          rounded="50px"
          p={[0, 0, 0, '4rem']}
          w={['100%', '100%', '100%', '75%']}
          alignSelf="flex-end"
          pos="relative"
          direction={['column', 'column', 'column', 'row']}
        >
          <VStack
            pos={['relative', 'relative', 'relative', 'absolute']}
            top="1rem"
            right={[0, 0, 0, '60%']}
            w="full"
            bg={['#f1eff6', '#f1eff6', '#f1eff6', 'none']}
            rounded="50px"
            pt={['2rem', '2rem', '2rem', 0]}
            mb={['4rem', '4rem', '4rem', 0]}
          >
            <Image src={Scr1} placeholder="blur" loading="lazy" alt="Create your activities" />
          </VStack>
          <VStack alignItems="flex-start" textAlign="left" pl={[0, 0, 0, '40%']}>
            <Heading size="lg">Dedicated Activity Page</Heading>
            <Text lineHeight="1.8rem">
              Each activity or event that you create will have its own Activity Page where your
              clients can navigate to, book and make payment.
            </Text>
            <Text lineHeight="1.8rem">
              Our 3-step booking process makes booking your activity a breeze!
            </Text>
          </VStack>
        </Stack>

        <Spacer py={['1rem', '1rem', '1rem', '4rem']} />

        <Stack
          bg={['none', 'none', 'none', '#fff7e1']}
          rounded="50px"
          p={[0, 0, 0, '4rem']}
          w={['100%', '100%', '100%', '75%']}
          alignSelf="flex-start"
          pos="relative"
          direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        >
          <VStack
            alignItems="flex-start"
            textAlign="left"
            w={['100%', '100%', '100%', '60%']}
            mt={['4rem', '4rem', '4rem', 0]}
          >
            <Heading size="lg">Valuable data insights</Heading>
            <Text lineHeight="1.8rem">
              Your Dashboard will provide you with an overview of your business, with data on your
              balance, number of bookings, number of attendees, and the number activity page views.
            </Text>
            <Text lineHeight="1.8rem">Easily download your booking data via a TXT file.</Text>
          </VStack>
          <VStack
            pos={['relative', 'relative', 'relative', 'absolute']}
            top="1rem"
            left={[0, 0, 0, '55%']}
            w="full"
            bg={['#f1eff6', '#f1eff6', '#f1eff6', 'none']}
            rounded="50px"
            pt={['2rem', '2rem', '2rem', 0]}
          >
            <Image src={Scr1} placeholder="blur" loading="lazy" alt="Create your activities" />
          </VStack>
        </Stack>

        <Spacer py={['1rem', '1rem', '1rem', '4rem']} />
      </VStack>
    </>
  )
}

const Dots = () => (
  <>
    <Dot bg="#3176EE" size="1rem" top={['0px', '50px']} left={['50px', '220px']} />
    <Dot
      border="8px solid #F9D278"
      top={['300px', '120px']}
      right={['20px', 'auto']}
      left={['auto', '120px']}
    />
    <Dot bg="#F4B7C4" size="1rem" top={['80px', '0px']} right={['10px', '450px']} />
    <Dot bg="#F4B7C4" top={['420px', '550px']} left={['0px', '250px']} />
    <Dot bg="#F9D278" size="1rem" top={['420px', '650px']} right={['0px', '300px']} />
    <Dot
      image="home-dot1"
      size="70px"
      left={['auto', '400px']}
      right={['40px', 'auto']}
      top={['-20px', '-20px']}
    />
    <Dot
      image="home-dot2"
      size="56px"
      left={['-20px', 'auto']}
      right={['auto', '200px']}
      top={['330px', '100px']}
    />
    <Dot
      image="home-dot3"
      size="46px"
      left={['-200px', 'auto']}
      right={['auto', '260px']}
      top={['330px', '500px']}
    />
    <Dot image="home-dot4" size="60px" left={['-200px', '100px']} top={['330px', '400px']} />
  </>
)

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

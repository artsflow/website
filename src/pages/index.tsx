import React from 'react'
import { Stack, VStack, Text, Heading, Box, Spacer, Icon } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import Image from 'next/image'

import { trackHomepageVideoPlay, trackHomepageVideoEnd } from 'analytics'
import { GetStartedButton, Benefits, Dot, Meta } from 'components'
import SquaresSvg from 'svg/landing/squares.svg'
import CalendarSvg from 'svg/landing/calendar.svg'
import SendSvg from 'svg/landing/send.svg'
import CardSvg from 'svg/landing/card.svg'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import ScrActivities from '../../public/img/scr-activities.webp'
import ScrActivityPage from '../../public/img/scr-activity-page.webp'
import ScrDashboard from '../../public/img/scr-dashboard.webp'

export default function Home(): JSX.Element {
  const handlePlayVideo = () => {
    trackHomepageVideoPlay()
  }

  const handleEndVideo = () => {
    trackHomepageVideoEnd()
  }

  return (
    <>
      <Meta />
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
          Create wonderful events, receive bookings and share your creative passion!
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
          top="40px"
          left="40px"
          transform="scaleX(-1) rotate(-30deg)"
          display={['none', 'none', 'block']}
        />
        <Heading px="1rem">
          The{' '}
          <Text as="span" color="af.teal">
            events platform
          </Text>{' '}
          for creative events!
        </Heading>
        <Heading as="h2" fontWeight="normal" size="md" py={['1rem', 0]}>
          We’ve created a <b>go-to events platform for arts and culture</b>, helping to connect
          those who enjoy the arts with wonderful creative events!
        </Heading>
        <Text fontSize="lg" textAlign={['left', 'center']} px={[0, '3rem']}>
          Take your creative events to the <b>next</b> level with Artsflow enabling you to easily
          create your events, promote them, secure bookings and share your creative passion!
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
            spacing="1.5rem"
          >
            <Heading size="lg">Create your events</Heading>
            <Text lineHeight="1.8rem">
              Easily create, publish and amend your arts events in Artsflow.
            </Text>
            <Text lineHeight="1.8rem">
              Whether your organising events on a weekly or monthly basis or delivering a 6 week
              course, you can determine what events you want to deliver and when.
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
            transform="scale(85%)"
          >
            <Image
              src={ScrActivities}
              placeholder="blur"
              loading="lazy"
              alt="Create your activities"
              quality="95"
            />
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
            transform="scale(85%)"
          >
            <Image
              src={ScrActivityPage}
              placeholder="blur"
              loading="lazy"
              alt="Create your activities"
              quality="95"
            />
          </VStack>
          <VStack alignItems="flex-start" textAlign="left" pl={[0, 0, 0, '40%']} spacing="1.5rem">
            <Heading size="lg">Dedicated Event Page</Heading>
            <Text lineHeight="1.8rem">
              Each event that you create will have its own Event Page that your audience can visit
              via a short link. From there they can easily book and make payment.
            </Text>
            <Text lineHeight="1.8rem">
              Our 3-step booking process makes booking your event a breeze!
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
            spacing="1.5rem"
          >
            <Heading size="lg">Valuable data insights</Heading>
            <Text lineHeight="1.8rem">
              Your Dashboard will provide you with an overview of your business, with data on your
              balance, number of bookings, number of attendees, and the number of event page views.
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
            transform="scale(85%)"
          >
            <Image
              src={ScrDashboard}
              placeholder="blur"
              loading="lazy"
              alt="Create your activities"
              quality="95"
            />
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
    <Dot bg="#F4B7C4" top={['420px', '580px']} left={['0px', '200px']} />
    <Dot bg="#F9D278" size="1rem" top={['420px', '650px']} right={['0px', '200px']} />
    <Dot
      image="home-dot1"
      size="70px"
      left={['auto', '400px']}
      right={['60px', 'auto']}
      top={['0px', '-20px']}
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
      right={['auto', '100px']}
      top={['330px', '500px']}
    />
    <Dot image="home-dot4" size="60px" left={['-200px', '100px']} top={['330px', '400px']} />
  </>
)

const benefits = {
  1: {
    icon: SquaresSvg,
    title: 'Eye-catching events',
    description:
      'You can create multiple events on the platform and share them with your community. Our ‘Explore’ page will enable people to discover your events.',
  },
  2: {
    icon: CalendarSvg,
    title: 'Seamless Bookings',
    description:
      'Share your Event Page with your audience and via your social media channels and people can book it easily, in just a few clicks.',
  },
  3: {
    icon: SendSvg,
    title: 'Engaging newsletters',
    description:
      'Communicate with your audience. Share upcoming events, send reminders, include video call links and more. Connect with your audience more easily.',
  },
  4: {
    icon: CardSvg,
    title: 'Smooth payments',
    description:
      'Once you’re event has finished you’ll receive payment from all of your bookings. You can track your income and other metrics via the Dashboard.',
  },
}

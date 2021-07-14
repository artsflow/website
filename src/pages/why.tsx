import React from 'react'
import { VStack, Stack, Text, Heading, Box, Icon, SimpleGrid, HStack } from '@chakra-ui/react'
import Image from 'next/image'

import { Meta, Benefits, Dot } from 'components'
import UsersSvg from 'svg/b-users.svg'
import BulbSvg from 'svg/b-bulb.svg'
import TechSvg from 'svg/b-tech.svg'
import LocateSvg from 'svg/b-locate.svg'
import CheckSvg from 'svg/check.svg'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import HeroImg from '../../public/img/hero-why.webp'
import WhyImg1 from '../../public/img/why-img1.webp'
import WhyImg2 from '../../public/img/why-img2.webp'

export default function WhyArtsflow(): JSX.Element {
  return (
    <>
      <Meta title="Why Artsflow?" />
      <VStack
        bg="#fff9e7"
        px="2rem"
        textAlign="center"
        spacing="1.5rem"
        pt={['2rem', '5rem']}
        pb={['4rem', '8rem']}
        pos="relative"
      >
        <Dots />
        <Stack
          direction={['column', 'column', 'row']}
          maxW="1000px"
          w="full"
          justifyContent="space-between"
          spacing="2rem"
        >
          <VStack
            maxW={['auto', 'auto', '350px']}
            justifyContent="center"
            textAlign={['center', 'center', 'left']}
            spacing="1rem"
            zIndex="1"
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
            <Image src={HeroImg} placeholder="blur" loading="lazy" alt="Why Artsflow?" />
          </Box>
        </Stack>
      </VStack>
      <VStack
        justifyContent="center"
        maxW="1000px"
        px="2rem"
        pt={['2rem', '5rem']}
        pb={['4rem', '6rem']}
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
          top={['-2rem', '2rem']}
          right={['60px', '120px']}
          transform="rotate(-30deg)"
        />
        <Heading px="2rem">Why we’re doing this?</Heading>
        <Text fontSize="xl" maxW="500px">
          We’re on a mission to{' '}
          <Text as="span" color="af.pink" fontWeight="bold">
            ‘level up’
          </Text>{' '}
          the arts and cultural sector and make the arts{' '}
          <Text as="span" color="af.pink" fontWeight="bold">
            accessible
          </Text>{' '}
          to everyone! 💯
        </Text>
        <Benefits data={benefits} pt={['3rem', '4rem']} />
      </VStack>

      <VStack
        bg="#fafafa"
        px="2rem"
        textAlign="center"
        spacing={['4rem', '4rem', '6rem']}
        pt={['4rem', '6rem']}
        pb={['4rem', '6rem']}
        pos="relative"
      >
        <Stack
          direction={['column-reverse', 'column-reverse', 'row']}
          maxW="1000px"
          w="full"
          justifyContent="space-between"
          spacing={['1rem', '2rem', '4rem']}
        >
          <VStack
            justifyContent="center"
            alignItems="flex-start"
            textAlign="left"
            spacing="1rem"
            maxW={['auto', 'auto', '40%']}
          >
            <Heading color="#484848">Empowering people through the arts</Heading>
            <Text lineHeight="1.8rem">
              We’ve been making a difference to peoples lives over the last 9 years with Creative
              Minds (CM), enabling people of all ages and abilities to explore their creativity.
            </Text>
            <Text lineHeight="1.8rem">
              At one stage our nationwide community of artists were delivering 350 art sessions to
              nearly 2000 people a month!
            </Text>
          </VStack>
          <VStack justifyContent="center">
            <Image
              src={WhyImg1}
              placeholder="blur"
              loading="lazy"
              alt="Empowering people through the arts"
            />
          </VStack>
        </Stack>
        <Stack
          direction={['column', 'column', 'row']}
          maxW="1000px"
          w="full"
          justifyContent="space-between"
          spacing={['1rem', '2rem', '4rem']}
        >
          <VStack justifyContent="center">
            <Image
              src={WhyImg2}
              placeholder="blur"
              loading="lazy"
              alt="Becoming a Creative is well within reach"
            />
          </VStack>
          <VStack
            justifyContent="center"
            alignItems="flex-start"
            textAlign="left"
            spacing="1rem"
            maxW={['auto', 'auto', '40%']}
          >
            <Heading color="#484848">Becoming a Creative is well within reach</Heading>
            <Text lineHeight="1.8rem">
              We’ve trained up to 70 CM Artists, and one thing that we’ve learnt is that sharing
              your passion for the arts is well within reach. All you need to do is decide to start
              your creative journey today.
            </Text>
            <Text lineHeight="1.8rem">
              With Artsflow we’ll provide you with the <b>tools</b> and <b>know-how</b> to make it
              happen!
            </Text>
          </VStack>
        </Stack>
      </VStack>
      <VStack
        justifyContent="center"
        maxW="1000px"
        px="2rem"
        pt={['2rem', '2rem']}
        pb={['2rem', '4rem']}
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
          top="0.5rem"
          left={['0', '100px', '200px']}
          transform="scaleX(-1) rotate(-30deg)"
        />
        <Heading px="2rem">Why join Artsflow?</Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing="2rem" textAlign="left" pt={['1rem', '2rem']}>
          <Item
            title={
              <>
                <b>Create arts activities/events with ease!</b> - Our ‘Add Activity’ flow is only
                for creative events meaning that Users who are interested in the arts will be able
                to find and book your event more easily.
              </>
            }
          />
          <Item
            title={
              <>
                <b>Accessible Platform</b> – Due to working with a range of clients over the years
                we understand how important accessibility is for you when using the platform, and
                your clients who book your events.
              </>
            }
          />
          <Item
            title={
              <>
                <b>Seamless bookings & payments</b> – Our 3-step booking process makes it super easy
                for people to book and pay to attend your arts activities. It’s never been easier to
                earn an income from your passion.
              </>
            }
          />
          <Item
            title={
              <>
                <b>Creative Profiles (coming soon)</b> – Beautiful public profiles are coming your
                way! This will be your landing page displaying all of your arts activities/events
                for people to explore and book!
              </>
            }
          />
          <Item
            title={
              <>
                <b>A Smooth Experience</b> – We’ve had some great initial feedback from Creatives
                who have told us their experience has been much better than other platforms. The
                last thing you want is to get lost in a maze!
              </>
            }
          />
          <Item
            title={
              <>
                <b>Creative Corner webinars</b> – Learn from the experts and gain valuable insights
                when you attend our Creative Corner webinars! We’ll explore many different areas of
                your creative business.
              </>
            }
          />
          <Item
            title={
              <>
                <b>Discount on Artsflow Training</b> – Get a 20% discount on our Training when you
                login in and create your first arts activity/event on Artsflow. Make today the day
                you start your creative journey.
              </>
            }
          />
          <Item
            title={
              <>
                <b>Access to our Google Drive</b> – Our Drive is full of free templates to help you
                get started with your creative business. Once you’ve joined the platform we’ll send
                you an invite link... Yep, that’s it!
              </>
            }
          />
        </SimpleGrid>
        <Text fontSize="xl" py={['2rem', '3rem']} maxW="550px">
          We’re not just an events platform, we’re here to <B>support</B> and foster a{' '}
          <B>Creative Community</B> that wants to bring the arts into their community!
        </Text>
      </VStack>
    </>
  )
}

const Item = ({ title }: any) => (
  <HStack alignItems="flex-start" spacing="1rem">
    <Icon w={['30px', '40px']} h={['30px', '40px']} as={CheckSvg} />
    <Text lineHeight="1.8rem">{title}</Text>
  </HStack>
)

const B = ({ children }: any) => (
  <Text as="span" fontWeight="bold" color="af.pink">
    {children}
  </Text>
)

const benefits = {
  1: {
    icon: UsersSvg,
    title: 'Increase Access ',
    description:
      'We want the arts to be accessible to all. Through Artsflow we hope to increase access to the arts and thus increase awareness of arts activity locally.',
  },
  2: {
    icon: BulbSvg,
    title: 'Empower Creatives',
    description:
      'We want to empower Creatives both experienced and new to the sector, enabling them to share their passion and creativity with others, and earn an income.',
  },
  3: {
    icon: TechSvg,
    title: 'Technology Enabler ',
    description:
      'The Arts Sector is one of the only industries without a tailor-made platform that enables people to instantly and easily connect with art activities around them.',
  },
  4: {
    icon: LocateSvg,
    title: 'Service Discovery',
    description:
      'A world of opportunities and experiences will be opened up for both Creatives & Users. Artsflow will enable Users to discover wonderful arts activities local to them.',
  },
}

const Dots = () => (
  <>
    <Dot
      bg="#F9D278"
      size="1rem"
      top={['0px', '40px']}
      left={['0px', '30%']}
      display={['none', 'block']}
    />
    <Dot
      bg="#F4B7C4"
      size="1rem"
      top={['0px', '-20px']}
      left={['0px', '60%']}
      display={['none', 'block']}
    />
    <Dot bg="#3176EE" size="1rem" top={['0px', '60px']} left={['45%', '75%']} />
    <Dot border="8px solid #F9D278" top={['-40px', '60px']} left={['80%', '88%']} />
    <Dot bg="#F9D278" size="1rem" top={['480px', '500px']} left={['5%', '5%']} />
    <Dot
      image="why-dot1"
      size="46px"
      left={['-30px', '15%']}
      top={['80px', '60px']}
      display={['block', 'none', 'block']}
    />
    <Dot
      image="why-dot2"
      size="70px"
      left={['30px', '3%']}
      top={['80px', '160px']}
      display={['none', 'none', 'none', 'block']}
    />
    <Dot image="why-dot3" size="56px" left={['25%', '25%']} top={['500px', '520px']} />
    <Dot image="why-dot4" size="40px" right={['0', '5%']} top={['450px', '520px']} />
  </>
)

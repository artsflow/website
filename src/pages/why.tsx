import React from 'react'
import { VStack, Stack, Text, Heading, Box, Icon, Badge } from '@chakra-ui/react'
import Image from 'next/image'

import { Meta, Benefits, Dot, GetStartedButton } from 'components'
import UsersSvg from 'svg/b-users.svg'
import BulbSvg from 'svg/b-bulb.svg'
import TechSvg from 'svg/b-tech.svg'
import LocateSvg from 'svg/b-locate.svg'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import HeroImg from '../../public/img/hero-why2.webp'
import WhyImg1 from '../../public/img/why-img1.webp'
import WhyImg2 from '../../public/img/why-img2.webp'
import WhyImg3 from '../../public/img/why-img3.webp'

export default function WhyArtsflow(): JSX.Element {
  return (
    <>
      <Meta title="Why Artsflow?" />
      <VStack
        bg="#edf8fa"
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
              Creative events all in one place!
            </Heading>
            <Text color="#616167" maxW="900px" fontSize="xl">
              We’ve built a tailor-made platform to super-charge your creative events helping you to
              share your passion with others!
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
        px="2rem"
        textAlign="center"
        spacing={['4rem', '4rem', '6rem']}
        pt={['4rem', '6rem']}
        pb={['4rem', '6rem']}
        pos="relative"
      >
        <Icon
          as={CurledArrowSvg}
          w="120px"
          h="90px"
          pos="absolute"
          top={['-2rem', '-2rem']}
          right={['60px', '120px']}
          transform="rotate(-30deg)"
        />
        <Stack
          direction={['column', 'column', 'row']}
          maxW="1000px"
          w="full"
          justifyContent="space-between"
          spacing={['1rem', '2rem', '4rem']}
        >
          <VStack justifyContent="center">
            <Image
              src={WhyImg1}
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
            <Heading color="#484848">Inspire people by sharing your creative passion.</Heading>
            <Text lineHeight="1.8rem">
              Whether you’re a visual artist, musician, photographer, dancer or an arts
              organisation, our <b>tailor-made platform</b> has everything you need to get your
              creative events out there to those that are interested!
            </Text>
            <GetStartedButton label="Create your events ⇾" location="why" />
          </VStack>
        </Stack>

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
            <Heading color="#484848">Managing your events has never been easier!</Heading>
            <Text lineHeight="1.8rem">
              It’s never been easier to create, publish and manage your creative events through
              Artsflow. Our <b>mobile optimised Event Pages</b> and 3-step booking process make it
              effortless for your audience to book your event!
            </Text>
            <GetStartedButton location="why" />
          </VStack>
          <VStack justifyContent="center">
            <Image
              src={WhyImg2}
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
              src={WhyImg3}
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
            <Badge
              variant="outline"
              textTransform="none"
              color="white"
              bg="#cfcfd1"
              rounded="8px"
              px="2"
              py="1"
            >
              Coming Soon
            </Badge>
            <Heading color="#484848">Make your events shine with Organiser Profiles.</Heading>
            <Text lineHeight="1.8rem">
              Whether you’re delivering workshops, hosting a festival or teaching specialised
              courses. Our Organiser Profiles will enable you to <b>create a destination</b> for
              your audience where they can find out more about you and your events..
            </Text>
            <GetStartedButton label="Explore more ⇾" location="why" />
          </VStack>
        </Stack>
      </VStack>

      <VStack bg="#fafafa">
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
            top="-2rem"
            left={['0', '100px', '200px']}
            transform="scaleX(-1) rotate(-30deg)"
          />
          <Heading px="2rem">Why we’re doing this?</Heading>
          <Text fontSize="xl" pt={['2rem', '2rem']} maxW="550px">
            We’re on a mission to <B>‘level up’</B> arts and culture and make the arts{' '}
            <B>accessible</B> to everyone! 💯💪
          </Text>
          <Text fontSize="xl" maxW="650px">
            We want a world where arts and culture is valued, abundant and truely accessible to
            people, so we decided enough was enough it’s time to build it!
          </Text>
          <Text fontSize="xl" maxW="550px">
            Join us on this journey.
          </Text>

          <Benefits data={benefits} pt={['3rem', '4rem']} />
        </VStack>
      </VStack>
    </>
  )
}

const B = ({ children }: any) => (
  <Text as="span" fontWeight="bold" color="af.teal">
    {children}
  </Text>
)

const benefits = {
  1: {
    icon: UsersSvg,
    title: 'Increase Access ',
    description:
      'We want the arts to be accessible to all. Through Artsflow we hope to increase access to the arts and thus increase awareness of the arts locally & nationally.',
  },
  2: {
    icon: BulbSvg,
    title: 'Empower Organisations',
    description:
      'We want to empower creative people and organisations enabling them to create wonderful events, engage their audiences and generate an income.',
  },
  3: {
    icon: TechSvg,
    title: 'Technology Empowerer',
    description:
      'Arts & culture is one of the only areas without a tailor-made platform that enables people to instantly and easily connect with the arts - we want to change that. ',
  },
  4: {
    icon: LocateSvg,
    title: 'Service Discovery',
    description:
      'New opportunities and experiences will emerge for both creative organisations and their audiences, enabling the discovery of wonderful arts events locally and nationally.',
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

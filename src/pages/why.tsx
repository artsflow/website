import React from 'react'
import { VStack, Stack, Text, Heading, Box, Icon } from '@chakra-ui/react'
import Image from 'next/image'

import { Meta, Benefits } from 'components'
import UsersSvg from 'svg/b-users.svg'
import BulbSvg from 'svg/b-bulb.svg'
import TechSvg from 'svg/b-tech.svg'
import LocateSvg from 'svg/b-locate.svg'
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
        pt={['40px', '130px']}
        pb={['4rem', '6rem']}
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
          right="120px"
          transform="rotate(-30deg)"
          display={['none', 'none', 'block']}
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
          maxW="1200px"
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
          maxW="1200px"
          w="full"
          justifyContent="space-between"
          spacing={['1rem', '2rem', '4rem']}
        >
          <VStack justifyContent="center">
            <Image
              src={WhyImg2}
              placeholder="blur"
              loading="lazy"
              alt="Empowering people through the arts"
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
    </>
  )
}

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

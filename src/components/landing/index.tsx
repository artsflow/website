import React from 'react'
import {
  Link,
  Flex,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Icon,
} from '@chakra-ui/react'
import { BsArrowRightShort } from 'react-icons/bs'

// import ArtsflowSvg from 'svg/artsflow.svg'
import AfSvg from 'svg/af.svg'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'

export default function Landing(): JSX.Element {
  return (
    <>
      <Header />
      <VStack maxW={['100%', '1440px']} m="auto">
        <Intro />
        <Benefits />
      </VStack>
      <Join />
      <Footer />
    </>
  )
}

const Header = () => (
  <Flex
    bg="rgba(71, 188, 200, 0.1)"
    w="100%"
    h="100vh"
    minH="900px"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize="3xl">header</Text>
  </Flex>
)

const Intro = () => (
  <VStack w="100%" p={['2rem']} py={['80px', '160px']} alignItems="center" justifyContent="center">
    <Heading fontSize={['2rem', '3rem']} mb="32px" textAlign="center" fontWeight="semibold">
      Finally, a platform for the arts!
    </Heading>
    <Text fontSize={['1.125rem', '1.5rem']} px={[0, '10%']} textAlign="center">
      Artsflow is a tailor-made platform for the Arts Sector enabling creative practitioners to
      easily create, book, deliver and earn a living from their passion. We will help you to connect
      with people locally, so that you can share your passion with them.{' '}
    </Text>
  </VStack>
)

const Benefits = () => (
  <Flex
    bg="gray.100"
    w="100%"
    h="600px"
    alignItems="center"
    justifyContent="center"
    name="benefits"
  >
    <SimpleGrid />
    <Text fontSize="3xl">benefits</Text>
  </Flex>
)

const Join = () => (
  <VStack
    bg="rgba(71, 188, 200, 0.1)"
    p={['2rem']}
    py={['80px', '120px']}
    alignItems="center"
    justifyContent="center"
  >
    <Heading fontSize={['2rem', '3rem']} mb="24px" textAlign="center" fontWeight="semibold">
      Join the Artsflow platform before we launch publicly!
    </Heading>
    <Text
      fontSize={['1.125rem', '1.5rem']}
      px={[0, '10%']}
      mb={['2rem', '40px']}
      textAlign="center"
    >
      Sign up to receive updates on our progress and join the Beta release of the platform
    </Text>
    <HStack position="relative" w="100%" alignItems="center" justifyContent="center">
      <Button
        bg="#47BCC8"
        color="white"
        py="1.75rem"
        w={['100%', '300px']}
        fontSize="1.25rem"
        fontWeight="semibold"
        rightIcon={<Icon as={BsArrowRightShort} />}
      >
        Joint the waiting list
      </Button>
      <Icon
        as={CurledArrowSvg}
        w="160"
        h="70"
        display={['none', 'none', 'block']}
        position="absolute"
        left={[0, 0, 'calc(70%)']}
        top="calc(-100%)"
      />
    </HStack>
  </VStack>
)

const Footer = () => (
  <VStack
    maxW={['100%', '1440px']}
    m="auto"
    pt={['5rem', '2rem']}
    pb={['3rem', '2rem']}
    px={['2rem', '4rem']}
  >
    <Stack
      direction={['column-reverse', 'row']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack alignItems="center" justifyContent="center">
        <Icon as={AfSvg} w="24px" h="32px" />
        <Text fontSize="14px">Copyright © 2021 Artsflow</Text>
      </HStack>
      <HStack fontSize="14px" spacing="20px" mb={['20px !important', '0 !important']}>
        <Link href="/cookies">Cookies</Link>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </HStack>
    </Stack>
  </VStack>
)

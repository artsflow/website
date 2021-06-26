import React from 'react'
import Image from 'next/image'
import { Box, Stack, VStack, Text, Heading, Icon } from '@chakra-ui/react'
import { scaleLinear } from 'd3-scale'

import ArtsflowSvg from 'svg/artsflow.svg'
import { useWindowSize } from '../../hooks'
import { OrderButton } from './common'

export const Hero = () => (
  <Stack
    bg="rgba(71, 188, 200, 0.1)"
    w="100%"
    h={['auto', '900px']}
    maxH={['auto', '900px']}
    alignItems="center"
    justifyContent="space-between"
    position="relative"
    direction={['column', 'row']}
    overflow="hidden"
    pos="relative"
  >
    <VStack
      w={['100%', '440px']}
      justifyContent="center"
      alignItems="flex-start"
      pos="relative"
      p={['2rem', '0']}
      ml={['0', '32px', '100px']}
      mb={['80px', 0]}
      mt={['40px', 0]}
      h="100%"
      zIndex="2"
    >
      <Icon
        as={ArtsflowSvg}
        w={['134px', '160px']}
        h={['30px', '36px']}
        justifySelf="flex-start"
        top={['0px', '40px']}
        pos="absolute"
      />
      <Box pt={['60px', 0]} mb={['150px', '0']}>
        <Text fontSize="20px">👋 Welcome!</Text>
        <Heading
          as="h1"
          fontSize={['2.125rem', '3rem']}
          pt={['16px', '32px']}
          mb={['20px', '30px']}
        >
          Artsflow is the{' '}
          <Text as="span" color="af.pink">
            event management platform
          </Text>{' '}
          for the arts sector
        </Heading>
        <Text
          fontSize={['1.125rem', '1.25rem']}
          pb={['32px', '40px']}
          lineHeight="2rem"
          color="#616167"
        >
          Whether you’re a skilled artist, musician, dancer or drama practitioner, you can host your
          events and activities with Artsflow.
        </Text>
        <OrderButton type="hero" />
      </Box>
    </VStack>
    <Box
      w={['100%', '500px']}
      h={['375px', '100%']}
      bg="#765EA6"
      top="0px"
      roundedTopLeft={['40px', '80px']}
      roundedTopRight={['40px', '0']}
      roundedBottomLeft={['0', '80px']}
      position="relative"
    />
    <HeroImage />
    <Dot image="head1" left={['auto', '500px']} right={['-10px', 'auto']} top={['80px', '160px']} />
    <Dot image="head2" left={['-10px', 'auto']} right={['auto', '170px']} top={['550px', '45px']} />
    <Dot image="head3" top="760px" left="50px" display={['none', 'block']} w="68px" h="68px" />
    <Dot image="head4" top="800px" right="320px" display={['none', 'block']} w="42px" h="42px" />
    <Dot
      bg="#FFB4C4"
      left={['-10px', '50px']}
      top={['80px', '180px']}
      rounded="full"
      w={['31px', '39px']}
      h={['31px', '39px']}
    />
    <Dot
      bg="#1574F6"
      left={['270px', '680px']}
      top={['530px', '160px']}
      rounded="full"
      w="16px"
      h="16px"
    />
    <Dot
      display={['none', 'block']}
      bg="#FFD167"
      right="400px"
      top="70px"
      rounded="full"
      w="16px"
      h="16px"
    />
    <Dot
      display={['none', 'block']}
      bg="#FFB4C4"
      left="660px"
      top="800px"
      rounded="full"
      w="16px"
      h="16px"
    />
    <Dot
      display={['none', 'block']}
      bg="#F0F8F9"
      border="8px solid white"
      left="460px"
      top="740px"
      rounded="full"
      w="42px"
      h="42px"
    />
  </Stack>
)

const HeroImage = () => {
  const windowSize = useWindowSize()
  const xFn = scaleLinear().domain([800, 1600]).range([740, 140])
  const x = xFn(windowSize.width)

  return (
    <Box
      width={['643px', '1023px']}
      height={['494px', '786px']}
      position="absolute"
      top={['auto', '140px']}
      bottom={['-60px', 'auto']}
      right={['auto', `-${x <= 0 ? 0 : x}px`]}
      left={['20px', `auto`]}
    >
      <Image src="/img/hero.webp" alt="Artsflow management dashboard" priority layout="fill" />
    </Box>
  )
}

const Dot = ({ image, ...rest }: any) => (
  <Box
    pos="absolute"
    width="56px"
    height="56px"
    {...(image ? { backgroundImage: `url(/img/${image}.webp)` } : {})}
    {...rest}
  />
)

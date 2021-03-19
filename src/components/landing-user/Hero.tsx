import React from 'react'
import Image from 'next/image'
import { Box, Stack, Text, Heading, Icon } from '@chakra-ui/react'
import { scaleLinear } from 'd3-scale'

import ArtsflowSvg from 'svg/artsflow.svg'
import { useWindowSize } from '../../hooks'
import { OrderButton } from './common'

export const Hero = () => (
  <Stack
    bg="rgba(71, 188, 200, 0.1)"
    w="100%"
    h={['auto', '100vh']}
    maxH={['auto', '900px']}
    alignItems="center"
    justifyContent="space-between"
    position="relative"
    direction={['column', 'row']}
    overflow="hidden"
    pos="relative"
  >
    <Stack
      w={['100%', '440px']}
      justifyContent="center"
      alignItems="flex-start"
      p={['2rem', '0']}
      ml={['0', '32px', '100px']}
      mb={['120px', 0]}
      h="100%"
      zIndex="2"
    >
      <Icon
        as={ArtsflowSvg}
        w={['134px', '160px']}
        h={['30px', '36px']}
        justifySelf="flex-start"
        mt={[0, '40px']}
        mb="auto"
      />
      <Box alignSelf="center" pt={['60px', 0]} mb={['150px', 'auto']}>
        <Text fontSize="20px">👋 Welcome!</Text>
        <Heading
          as="h1"
          fontSize={['2.125rem', '3rem']}
          pt={['16px', '32px']}
          mb={['20px', '30px']}
        >
          Discover arts activities near you
        </Heading>
        <Text
          fontSize={['1.125rem', '1.25rem']}
          pb={['32px', '40px']}
          lineHeight="2rem"
          color="#616167"
        >
          Whether it’s a life drawing class, a pottery workshop, a messy play session or a salsa
          lesson you can find them and more on Artsflow.
        </Text>
        <OrderButton type="hero" />
      </Box>
    </Stack>
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
    <Dot image="head4" top="830px" right="220px" display={['none', 'block']} w="42px" h="42px" />
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
  const xFn = scaleLinear().domain([800, 1600]).range([-400, 0])
  const x = xFn(windowSize.width)
  return (
    <Box
      width={['440px', '932px']}
      height={['418px', '980px']}
      transform={['scale(0.95)', 'scale(0.75)']}
      position="absolute"
      top={['auto', '0px']}
      bottom={['80px', 'auto']}
      right={['auto', `${x}px`]}
      left={['calc(50% - 210px)', `auto`]}
    >
      <Image src="/img/hero-user.webp" alt="Artsflow" priority layout="fill" />
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

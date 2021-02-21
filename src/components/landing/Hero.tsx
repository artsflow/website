import React from 'react'
import { Box, Stack, Text, Heading, Icon, Image } from '@chakra-ui/react'
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
  >
    <Stack
      w={['100%', '440px']}
      justifyContent="center"
      alignItems="flex-start"
      p={['2rem', '0']}
      ml={['0', '32px', '100px']}
      mb={['0px', 0]}
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
      <Box alignSelf="center" pt={['60px', 0]} mb={['100px', 'auto']}>
        <Text fontSize="20px">👋 Welcome!</Text>
        <Heading
          as="h1"
          fontSize={['2.125rem', '3rem']}
          pt={['16px', '32px']}
          mb={['20px', '30px']}
        >
          Pursue your passion for the arts
        </Heading>
        <Text fontSize={['1.125rem', '1.25rem']} pb={['32px', '40px']} lineHeight="2rem">
          Whether you’re a skilled artist, musician, dancer or drama practitioner, you can pursue
          your passion with Artsflow.
        </Text>
        <OrderButton />
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
  </Stack>
)

const HeroImage = () => {
  const windowSize = useWindowSize()
  // console.log(windowSize.width)
  const xFn = scaleLinear().domain([800, 1600]).range([740, 140])
  const x = xFn(windowSize.width)
  return (
    <Box
      width={['600px', '1023px']}
      height={['487px', '827px']}
      position="absolute"
      top={['auto', '100px']}
      bottom={['-50px', 'auto']}
      right={['-260px', `-${x}px`]}
    >
      <Image
        src="/img/hero-image.png"
        alt="Artsflow management dashboard"
        // @ts-ignore
        // layout="fill"
        // unsized
        // quality="95"
      />
    </Box>
  )
}

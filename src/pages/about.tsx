import React from 'react'
import { VStack, Text, Heading, HStack, Stack, Box, Icon } from '@chakra-ui/react'
import Image from 'next/image'

import { Meta, Dot } from 'components'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import IconPainting from 'svg/icon-painting.svg'
import IconCode from 'svg/icon-code.svg'
import James1 from '../../public/img/about-james1.webp'
import James2 from '../../public/img/about-james2.webp'
import Radu1 from '../../public/img/about-radu1.webp'
import Radu2 from '../../public/img/about-radu2.webp'

export default function About(): JSX.Element {
  return (
    <>
      <Meta title="About Artsflow" />
      <VStack
        bg="#edf8fa"
        px="2rem"
        textAlign={['left', 'left', 'center']}
        spacing="1.5rem"
        pt={['3rem', '5rem']}
        pb={['3rem', '8rem']}
        pos="relative"
      >
        <Heading size="xl" color="#484848" textAlign="center" zIndex="2">
          The origins of Artsflow...
        </Heading>
        <Text color="#616167" maxW="900px" fontSize="xl" zIndex="2">
          <b>James</b> was working on his business Creative Minds and <b>Radu</b> was a contractor
          for tech start-ups. They were on completely different paths until they crossed in
          September 2020.
        </Text>
        <Text color="#616167" maxW="900px" fontSize="lg" zIndex="2">
          With a shared passion for the arts, a desire to empower people and to make the arts
          accessible to everyone they started Artsflow, a web & mobile app events platform for the
          arts & cultural sector.
        </Text>
        <Dots />
      </VStack>
      <VStack
        justifyContent="center"
        maxW="1000px"
        px="2rem"
        py={['4rem', '8rem']}
        m="auto"
        spacing={['4rem', '8rem']}
      >
        <Stack
          direction={['column-reverse', 'column-reverse', 'row']}
          justifyContent="space-between"
          spacing={['4rem', '4rem', '240px']}
        >
          <VStack spacing="1rem" justifyContent="center" alignItems="flex-start">
            <Heading>James Cropper, CEO</Heading>
            <Text>
              James is the strategic wizard at Artsflow. He is also an entrepreneur and founder of
              Creative Minds a nationwide community of artists that deliver art sessions to care
              homes and other venues.
            </Text>
            <Text>
              He has a BA Fine Art degree from Loughborough University and has a keen interest in
              sculpture.
            </Text>
          </VStack>
          <VStack pos="relative" alignItems="flex-end">
            <HStack pos="absolute" top="0" right={['240px', '300px']} spacing="0">
              <Icon
                as={CurledArrowSvg}
                w={['60px', '120px']}
                h="90px"
                transform="scaleX(-1)"
                display={['none', 'block']}
              />
              <Icon as={IconPainting} w="72px" h="72px" />
            </HStack>

            <Box w={['160px', '260px']}>
              <Image src={James1} placeholder="blur" loading="lazy" alt="James Cropper" />
            </Box>
            <Box
              pos="absolute"
              top={['80px', '120px']}
              left={['auto', 'auto', '-180px']}
              right={['100px', '180px', 'auto']}
              w={['160px', '260px']}
            >
              <Image src={James2} placeholder="blur" loading="lazy" alt="James Cropper" />
            </Box>
          </VStack>
        </Stack>
        <Stack
          direction={['column', 'column', 'row']}
          justifyContent="space-between"
          spacing={['6rem', '6rem', '240px']}
        >
          <VStack pos="relative" alignItems="flex-start">
            <Box w={['160px', '260px']}>
              <Image src={Radu1} placeholder="blur" loading="lazy" alt="James Cropper" />
            </Box>
            <Box
              pos="absolute"
              top={['80px', '120px']}
              left={['100px', '180px']}
              w={['120px', '160px']}
            >
              <Image src={Radu2} placeholder="blur" loading="lazy" alt="James Cropper" />
            </Box>
            <HStack pos="absolute" top="0" left={['200px', '260px']} spacing="0">
              <Icon as={IconCode} w="72px" h="72px" />
              <Icon
                as={CurledArrowSvg}
                w={['60px', '120px']}
                h="90px"
                display={['none', 'block']}
              />
            </HStack>
          </VStack>
          <VStack spacing="1rem" justifyContent="center" alignItems="flex-start">
            <Heading>Radu Ciocan, CTO</Heading>
            <Text>
              Radu is the technical wizard at Artsflow. As a Full Stack Developer with more than 10
              years professional experience he’s worked for prominent Fintech, Social Media and
              advertising start-ups.
            </Text>
            <Text>
              He’s also an avid photographer, with an interest in street photography. He had his
              first solo exhibiton in 2019.
            </Text>
          </VStack>
        </Stack>
      </VStack>
    </>
  )
}

const Dots = () => (
  <>
    <Dot bg="#3176EE" size="1rem" top={['60px', '50px']} left={['50px', '100px']} />
    <Dot
      border="8px solid #F9D278"
      top={['-50px', '70px']}
      right={['20px', 'auto']}
      left={['auto', '120px']}
      zIndex="1"
    />
    <Dot bg="#F4B7C4" size="30px" bottom={['80px', '50px']} left={['-10px', '350px']} />
    <Dot
      bg="#F4B7C4"
      size="1rem"
      top={['-20px', '0px']}
      right={['auto', '180px']}
      left={['30px', 'auto']}
    />
    <Dot bg="#3176EE" size="1rem" display={['none', 'block']} right="130px" top="250px" />
    <Dot
      bg="#F9D278"
      size="1rem"
      bottom={['30px', '140px']}
      right={['50px', '40px']}
      left={['auto', 'auto']}
    />
    <Dot
      image="about-dot1"
      size="70px"
      left={['auto', '400px']}
      right={['20px', 'auto']}
      top={['-100px', '-20px']}
    />
    <Dot
      image="about-dot2"
      size="60px"
      left={['-30px', 'auto']}
      right={['auto', '100px']}
      top={['0px', '120px']}
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      image="about-dot3"
      size="56px"
      left={['auto', '40px']}
      right={['auto', 'auto']}
      top={['0px', '220px']}
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      image="about-dot4"
      size="46px"
      left={['auto', 'auto']}
      right={['-20px', '400px']}
      top={['260px', '320px']}
      display={['block', 'none', 'none', 'block']}
    />
  </>
)

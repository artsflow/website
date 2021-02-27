import { Box, Icon, Heading, Text, Image, Stack, VStack } from '@chakra-ui/react'

import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import { Content } from './common'

export const About = () => (
  <Box pos="relative">
    <Icon
      as={CurledArrowSvg}
      w={['80px', '260px']}
      h={['35px', '170px']}
      boxSize="80px"
      position="absolute"
      transform="rotate(30deg) scaleX(-1)"
      mt={['-50px', '-80px']}
      ml={['30px', '50px']}
    />
    <Content py={['40px', '80px']} title="About us" />
    <Stack
      w="100%"
      p={['2rem']}
      alignItems="center"
      justifyContent="center"
      direction={['column', 'row']}
      spacing={['100px', '40px']}
    >
      <Founder img="james" name="James Cropper" position="CEO">
        James is an entrepreneur and founder of Creative Minds a nationwide community of artists
        that deliver art sessions to care homes and other venues.
        <br />
        <br />
        He has a BA Fine Art degree from Loughborough University and has a keen interest in
        sculpture.
      </Founder>
      <Founder img="radu" name="Radu Ciocan" position="CTO" bg="#F1EFF6">
        Radu is the technical wizard at Artsflow. As a Full Stack software developer with more than
        10 years professional experience he’s worked for prominent fintech, social media and
        advertising start-ups.
        <br />
        <br />
        He’s also an avid photographer, with an interest in street photography.
      </Founder>
    </Stack>
  </Box>
)

const Founder = ({ img, name, position, children, ...rest }: any) => (
  <VStack
    bg="#FEF5F8"
    rounded={['30px', '50px']}
    w="100%"
    px={['2rem', '4rem']}
    pb="4rem"
    minH="400px"
    {...rest}
  >
    <Image
      src={`/img/${img}.webp`}
      fallbackSrc={`/img/${img}.png`}
      htmlWidth="120"
      htmlHeight="120"
      w="120px"
      h="120px"
      display="block"
      alt={name}
      border="10px solid white"
      rounded="full"
      mt="-60px"
      mb="30px"
    />
    <Heading fontSize="1.5rem" display="flex" dir="row" mb="1rem">
      {name}, &nbsp;
      <Text fontWeight="normal">{position}</Text>
    </Heading>
    <Text fontSize="1rem" lineHeight="2rem">
      {children}
    </Text>
  </VStack>
)

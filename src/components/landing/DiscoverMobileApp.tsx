import { Box, Heading, Text, Icon, Image, Stack, VStack } from '@chakra-ui/react'

import CurledArrowSvg from 'svg/landing/curled-arrow.svg'

import { Content } from './common'

export const DiscoverMobileApp = () => (
  <Box pos="relative">
    <Icon
      as={CurledArrowSvg}
      w={['80px', '260px']}
      h={['35px', '170px']}
      boxSize="80px"
      position="absolute"
      transform="rotate(30deg) scaleX(-1)"
      mt={['-50px', '']}
    />
    <Content
      pt="0"
      textAlign={['left', 'center']}
      title={<Text px="40px">Discover the Mobile app</Text>}
      subtitle="The mobile app or ‘booking platform’ will be where you’ll see your activities listed and receive bookings from Users. "
    />
    <Stack
      direction={['column-reverse', 'row']}
      justifyContent="center"
      h={['auto', '500px']}
      mb={['50px', '100px']}
      pos="relative"
      // border="1px solid red"
    >
      <Box
        w="calc(100% - 80px)"
        h="100%"
        px="40px"
        display={['none', 'block']}
        position="absolute"
        rounded="50px"
        bg="rgba(239, 151, 181, 0.2)"
      />
      <VStack
        px="2rem"
        width={['100%', '400px']}
        justifyContent="center"
        alignItems="flex-start"
        // border="1px solid green"
      >
        <Heading fontSize={['2rem', '3rem']} fontWeight="semibold">
          Explore the Arts
        </Heading>
        <Text fontSize="1rem" lineHeight="2rem" pt="20px">
          Once you’ve created and published your arts activity this is what it will look like to
          Users.
          <br />
          <br />
          They will be able to see the activities nearest to them, filter by art form or whether
          they are looking for social or educational activities.
        </Text>
      </VStack>
      <Stack
        pos="relative"
        overflow={['hidden', 'inherit']}
        py="100px"
        // border="1px solid blue"
        width={['100%', '400px']}
      >
        <Box
          w="300px"
          rounded="50px"
          h="320px"
          alignSelf="center"
          pos="relative"
          bg={['rgba(239, 151, 181, 0.2)', 'none']}
          display={['block', 'none']}
        />
        <Image
          src="/img/mobapp-scr1.png"
          alt="Artsflow mobile app screenshot 1"
          transform={['scale(1)', 'scale(1.4)']}
          position="absolute"
          left={['-10px', '0px']}
          top={['-20px', '-50px']}
        />
        <Image
          display={['none', 'block']}
          src="/img/mobapp-scr11.png"
          alt="Artsflow mobile app screenshot 2"
          transform="scale(1)"
          position="absolute"
          right="-320px"
          top="0"
        />
      </Stack>
    </Stack>
  </Box>
)

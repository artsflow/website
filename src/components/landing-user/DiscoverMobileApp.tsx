import { Box, Heading, Text, Icon, Stack, VStack } from '@chakra-ui/react'
import Image from 'next/image'

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
      subtitle="The mobile app is where you can view, book and pay for arts activities."
    />
    <Stack
      direction={['column-reverse', 'row']}
      justifyContent="center"
      h={['auto', '500px']}
      mb={['50px', '100px']}
      pos="relative"
      spacing="40px"
      // alignItems="center"
      // border="1px solid red"
    >
      <Box
        w="calc(100% - 80px)"
        h="calc(100% - 40px)"
        px="40px"
        display={['none', 'block']}
        position="absolute"
        rounded="50px"
        bg="rgba(239, 151, 181, 0.2)"
      />
      <VStack
        px={['2rem', '0']}
        width={['100%', '400px']}
        justifyContent="center"
        alignItems="flex-start"
        // border="1px solid green"
      >
        <Heading fontSize={['1.375rem', '2rem']} fontWeight="semibold">
          Explore the Arts
        </Heading>
        <Text fontSize="1rem" lineHeight="2rem" pt="20px">
          On the Activities screen you can search, filter and find arts activities that you’re
          interested in.
          <br />
          <br />
          You can filter by location, art form or whether your interested in social or educational
          activities, for example guitar lessons.
        </Text>
      </VStack>
      <Stack
        pos="relative"
        overflow={['hidden', 'inherit']}
        py="120px"
        // border="1px solid blue"
        width={['100%', '400px']}
      >
        <Box
          w="300px"
          rounded="50px"
          h="300px"
          alignSelf="center"
          position="relative"
          bg={['rgba(239, 151, 181, 0.2)', 'none']}
          display={['block', 'none']}
        />
        <Box
          position="absolute"
          left={['calc(50% - 170px)', '-60px']}
          top={['45px', '-100px']}
          w={['340px', '500px']}
          h={['485px', '714px']}
        >
          <Image
            src="/img/mobapp-scr1.webp"
            alt="Artsflow mobile app explore screenshot 1"
            layout="fill"
          />
        </Box>
        <Box
          position="absolute"
          display={['none', 'block']}
          right="-280px"
          top="-10px"
          w="360px"
          h="540px"
        >
          <Image
            src="/img/mobapp-scr11.webp"
            alt="Artsflow mobile app explore screenshot 2"
            layout="fill"
          />
        </Box>
      </Stack>
    </Stack>

    <Stack
      direction={['column-reverse', 'row-reverse']}
      justifyContent="center"
      h={['auto', '500px']}
      mt={['50px', '200px']}
      mb={['50px', '240px']}
      pos="relative"
      spacing="40px"
      // alignItems="center"
      // border="1px solid red"
    >
      <Box
        w="calc(100% - 80px)"
        h="calc(100% - 0px)"
        px="40px"
        display={['none', 'block']}
        position="absolute"
        rounded="50px"
        bg="rgba(255, 200, 55, 0.3)"
      />
      <VStack
        px={['2rem', '0']}
        width={['100%', '460px']}
        justifyContent="center"
        alignItems="flex-start"
        // border="1px solid green"
      >
        <Heading fontSize={['1.375rem', '2rem']} fontWeight="semibold">
          Booking is a breeze
        </Heading>
        <Text fontSize="1rem" lineHeight="2rem" pt="20px">
          Booking an arts activity is so quick and easy. You can simply select a time and date that
          you’d like to attend your activity and then continue to payment.
          <br /> <br />
          If you wish you can make multiple bookings in one go.
        </Text>
      </VStack>
      <Stack
        pos="relative"
        overflow={['hidden', 'inherit']}
        py="120px"
        ml={['0', '60px']}
        // border="1px solid blue"
        width={['100%', '400px']}
      >
        <Box
          w="300px"
          rounded="50px"
          h="300px"
          alignSelf="center"
          pos="relative"
          bg={['rgba(255, 200, 55, 0.3)', 'none']}
          display={['block', 'none']}
        />
        <Box
          position="absolute"
          display={['none', 'block']}
          left="-220px"
          top="40px"
          w="360px"
          h="488px"
        >
          <Image
            src="/img/mobapp-scr21.webp"
            alt="Artsflow mobile app booking screenshot 2"
            layout="fill"
          />
        </Box>
        <Box
          position="absolute"
          w={['380px', '580px']}
          h={['512px', '781px']}
          left={['calc(50% - 190px)', '-80px']}
          top={['30px', '-110px']}
        >
          <Image
            src="/img/mobapp-scr2.webp"
            alt="Artsflow mobile app booking screenshot 1"
            layout="fill"
          />
        </Box>
      </Stack>
    </Stack>

    <Stack
      direction={['column-reverse', 'row']}
      justifyContent="center"
      h={['auto', '500px']}
      mb={['50px', '100px']}
      pos="relative"
      spacing="40px"
      // alignItems="center"
      // border="1px solid red"
    >
      <Box
        w="calc(100% - 80px)"
        h="calc(100% - 40px)"
        px="40px"
        display={['none', 'block']}
        position="absolute"
        rounded="50px"
        bg="rgba(71, 188, 200, 0.1)"
      />
      <VStack
        px={['2rem', '0']}
        width={['100%', '400px']}
        justifyContent="center"
        alignItems="flex-start"
        // border="1px solid green"
      >
        <Heading fontSize={['1.375rem', '2rem']} fontWeight="semibold">
          Communicate with Creatives
        </Heading>
        <Text fontSize="1rem" lineHeight="2rem" pt="20px">
          Got a question about an activity? No problem, simply message the Creative through the app.
          <br />
          <br />
          No need for emails or phone calls, easily get the answers you need to enable you to book
          the activity for yourself or others.
        </Text>
      </VStack>
      <Stack
        pos="relative"
        overflow={['hidden', 'inherit']}
        py="120px"
        // border="1px solid blue"
        width={['100%', '400px']}
      >
        <Box
          w="300px"
          rounded="50px"
          h="300px"
          alignSelf="center"
          position="relative"
          bg={['rgba(239, 151, 181, 0.2)', 'none']}
          display={['block', 'none']}
        />
        <Box
          position="absolute"
          left={['calc(50% - 185px)', '-60px']}
          top={['-15px', '-160px']}
          w={['340px', '512px']}
          h={['572px', '862px']}
        >
          <Image
            src="/img/mobapp-scr3.webp"
            alt="Artsflow mobile app explore screenshot 3"
            layout="fill"
          />
        </Box>
      </Stack>
    </Stack>
  </Box>
)
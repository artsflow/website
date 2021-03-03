import { Box, Heading, Text, Icon, Image, Stack, VStack } from '@chakra-ui/react'
import Image2 from 'next/image'

import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import EyeSvg from 'svg/landing/eye.svg'
import CalendarSvg from 'svg/landing/calendar.svg'
import ChatSvg from 'svg/landing/chat.svg'
import PieChartSvg from 'svg/landing/pie-chart.svg'

import { Content, Benefits } from './common'

const benefits = {
  1: {
    icon: EyeSvg,
    title: 'Increased visibility',
    description:
      'Publishing your arts activities on Artsflow will provide you with more visibility to Users locally and nationally.',
  },
  2: {
    icon: CalendarSvg,
    title: 'Seamless booking & transaction',
    description:
      'It’s never been easier for Users to book with you and to earn an income from your passion.',
  },
  3: {
    icon: ChatSvg,
    title: 'Communicate with Users',
    description:
      'Communicate with your attendees professionally to update them as to what to bring or inform them of a cancellation. ',
  },
  4: {
    icon: PieChartSvg,
    title: 'Data at a glance',
    description:
      'View your Dashboard containing data on your income, bookings, attendees and activities. Deeper data analytics available in the Web app.',
  },
}

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
          <Image2
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
          <Image2
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
      mb={['50px', '100px']}
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
          Booking an arts activity is so quick and easy for Users. They simply select the times and
          days/dates they’d like to attend your activity and then continue to payment.
          <br /> <br />
          It’s never been easier to track your bookings and earn an income from your passion.
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
        <Image
          display={['none', 'block']}
          src="/img/mobapp-scr21.webp"
          fallbackSrc="/img/mobapp-scr21.png"
          alt="Artsflow mobile app booking screenshot 2"
          transform="scale(1)"
          position="absolute"
          left="-245px"
          top="20px"
        />
        <Image
          src="/img/mobapp-scr2.webp"
          fallbackSrc="/img/mobapp-scr2.png"
          htmlWidth="768"
          htmlHeight="1291"
          alt="Artsflow mobile app booking screenshot 1"
          transform={['scale(0.8)', 'scale(1.2)']}
          position="absolute"
          left={['-10px', '0px']}
          top={['-30px', '-50px']}
        />
      </Stack>
    </Stack>
    <Box px={['2rem', '4rem']} my={['100px', '200px']}>
      <Heading
        fontSize={['1.5rem', '2rem']}
        fontWeight="semibold"
        px={['2rem', 0]}
        textAlign="center"
      >
        Why use our mobile app?
      </Heading>
      <Benefits mt={['40px', '80px']} data={benefits} />
    </Box>
  </Box>
)

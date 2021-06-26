import { Box, Heading, Text, Stack, VStack } from '@chakra-ui/react'
import Image from 'next/image'

// import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import CalendarSvg from 'svg/landing/calendar-alt.svg'
import SendSvg from 'svg/landing/send.svg'
import DocumentSvg from 'svg/landing/document.svg'
import DataSvg from 'svg/landing/data.svg'

import { Content, Benefits } from './common'

const benefits = {
  1: {
    icon: CalendarSvg,
    title: 'Calendar Overview',
    description:
      'Filter by day, week or month to see what’s going on and when, including every freelancer and franchisee (‘member’) in your organisation.',
  },
  2: {
    icon: SendSvg,
    title: 'Connect with your audience',
    description: 'Send them newsletters, track open rates, clicks and other useful information',
  },
  3: {
    icon: DocumentSvg,
    title: 'Access Resources',
    description:
      'From video tutorials, to documents and live training/tutorials (coming soon), we’ll have everything you need to get started on Artsflow.',
  },
  4: {
    icon: DataSvg,
    title: 'Crunch your data',
    description:
      'From the number of bookings to the income generated, the Dashboard contains the data you need to help you improve your business.',
  },
}

export const DiscoverWebApp = () => (
  <Box pos="relative">
    {/* <Icon
      as={CurledArrowSvg}
      w={['80px', '260px']}
      h={['35px', '170px']}
      boxSize="80px"
      position="absolute"
      transform={['rotate(30deg) scaleX(-1)', 'rotate(-220deg) scaleX(-1) scaleY(-1)']}
      mt={['-50px', '']}
      left={[0, 'auto']}
      right={['auto', '100px']}
    /> */}
    <Content
      pt="0"
      textAlign={['left', 'center']}
      title={<Text px="40px">Discover the Web app</Text>}
      subtitle="The web app or ‘management platform’ will be where you’ll be able to create events and activities, view data analytics and access resources to help grow your business."
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
        bg="rgba(118, 94, 166, 0.1)"
      />
      <VStack
        px={['2rem', '0']}
        width={['100%', '400px']}
        justifyContent="center"
        alignItems="flex-start"
        // border="1px solid green"
      >
        <Heading fontSize={['1.375rem', '2rem']} fontWeight="semibold">
          Create your activities and events
        </Heading>
        <Text fontSize="1rem" lineHeight="2rem" pt="20px">
          Easily create, publish and amend your arts activities in the Artsflow web app.
          <br />
          <br />
          Whether your delivering activities on a weekly basis, bi-monthly basis or delivering a 6
          week course, you can determine what activities you want to deliver and when.
        </Text>
      </VStack>
      <Stack
        pos="relative"
        overflow={['hidden', 'inherit']}
        py="40px"
        // border="1px solid blue"
        width={['100%', '400px']}
      >
        <Box
          w="300px"
          rounded="50px"
          h="360px"
          alignSelf="center"
          pos="relative"
          bg={['rgba(118, 94, 166, 0.1)', 'none']}
          display={['block', 'none']}
        />
        <Box
          position="absolute"
          left={['10px', '-50px']}
          top={['45px', '0px']}
          w={['588px', '924px']}
          h={['400px', '629px']}
        >
          <Image
            src="/img/webapp-scr1.webp"
            alt="Artsflow management dashboard activities screenshot"
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
        bg="rgba(239, 151, 181, 0.1)"
      />
      <VStack
        px={['2rem', '0']}
        width={['100%', '460px']}
        justifyContent="center"
        alignItems="flex-start"
        // border="1px solid green"
      >
        <Heading fontSize={['1.375rem', '2rem']} fontWeight="semibold">
          Complex data insights
        </Heading>
        <Text fontSize="1rem" lineHeight="2rem" pt="20px">
          Your Dashboard will provide you with an overview of your business, with data on your
          income, number of bookings, number of attendees, their age and what type of User they are.
          <br /> <br />
          Filter and download your data via a PDF or CSV file.
        </Text>
      </VStack>
      <Stack
        pos="relative"
        overflow={['hidden', 'inherit']}
        py="40px"
        ml={['0', '60px']}
        // border="1px solid blue"
        width={['100%', '400px']}
      >
        <Box
          w="300px"
          rounded="50px"
          h="360px"
          alignSelf="center"
          pos="relative"
          bg={['rgba(239, 151, 181, 0.1)', 'none']}
          display={['block', 'none']}
        />
        <Box
          position="absolute"
          left={['-215px', '-550px']}
          top={['50px', '10px']}
          w={['540px', '924px']}
          h={['375px', '641px']}
        >
          <Image
            src="/img/webapp-scr2.webp"
            alt="Artsflow mobile management dashboard screenshot"
            layout="fill"
          />
        </Box>
      </Stack>
    </Stack>

    <Box px={['2rem', '4rem']} my={['100px', '200px']}>
      <Heading
        fontSize={['1.5rem', '2rem']}
        fontWeight="semibold"
        px={['2rem', 0]}
        textAlign="center"
      >
        Why use our web app?
      </Heading>
      <Benefits mt={['40px', '80px']} data={benefits} />
    </Box>
  </Box>
)

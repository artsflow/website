import React from 'react'
import {
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

import Logo from 'svg/artsflow.svg'
import Eventbrite from 'svg/eventbrite.svg'
import StarSvg from 'svg/star.svg'
import { Dot, Meta } from 'components'

export default function Pricing(): JSX.Element {
  return (
    <>
      <Meta title="Pricing" />
      <VStack
        bg="#fafafa"
        px="2rem"
        textAlign="center"
        pt={['3rem', '5rem']}
        pb="8rem"
        pos="relative"
      >
        <Dots />
        <Heading as="h1" size="xl" color="#484848" mb="2rem">
          Pricing & Features
        </Heading>
        <Text fontSize="xl" color="#616167" pb="4rem">
          An{' '}
          <Text as="b" color="af.violet">
            accessible & affordable
          </Text>{' '}
          platform for the arts.
          <br />
          Artsflow is free for{' '}
          <Text as="b" color="af.violet">
            free
          </Text>{' '}
          events.
        </Text>
        <VStack
          justifyContent="center"
          w="full"
          maxW="800px"
          px={['2rem', '4rem']}
          py={['3rem', '4rem']}
          m="auto"
          spacing={['1.5rem', '2rem']}
          textAlign="center"
          bg="white"
          rounded="1.5rem"
          boxShadow="25px 25px 40px rgba(0, 0, 0, 0.08)"
          zIndex="1"
        >
          <Stack
            direction={['column', 'column', 'row']}
            w="full"
            justifyContent="space-between"
            spacing={['2rem', '2rem', '6rem']}
            px={[0, '2rem']}
          >
            <VStack spacing="0" w={['full', 'full', '45%']}>
              <Heading as="h2" fontSize={['2xl', 'xl']} color="#484848">
                Service Fee
              </Heading>
              <Text color="#a5a5a8">Applied to each booking</Text>
              <Text fontSize="4rem" fontWeight="bold" color="af.violet">
                5%
              </Text>
              <Text color="#616166">Yep, that’s it just 5%!</Text>
            </VStack>
            <VStack w={['full', 'full', '55%']} spacing="1.5rem" alignItems="flex-start">
              <Heading as="h2" size="md" color="#484848" pb="1.2rem">
                Comparison on an £8 ticket
              </Heading>
              <HStack justifyContent="space-between" w="full">
                <Logo width="107px" height="24px" />
                <Text color="#616167" fontWeight="bold">
                  £0.40
                </Text>
              </HStack>
              <Box w="full" h="1px" bg="#E5E5E5" />
              <HStack justifyContent="space-between" w="full">
                <Eventbrite width="107px" height="24px" />
                <Text color="#616167" fontWeight="bold">
                  £1.21
                </Text>
              </HStack>
            </VStack>
          </Stack>
          <List
            pt="2rem"
            spacing="1rem"
            w="full"
            alignItems="flex-start"
            display="flex"
            flexDirection="column"
          >
            <Title>Eye-catching Events</Title>
            <Item>Unlimited Free & Paid Events</Item>
            <Item>Responsive (multi-device) Activity Pages</Item>
            <Item>Unlimited Bookings & Attendees</Item>
            <Item>Detailed Data Analytics</Item>
            <Item>Online or In Person Events</Item>
            <Item>
              Beautiful Creative Profiles (<b>coming soon</b>)
            </Item>
            <Title>Instant Payments</Title>
            <Item>Easy 3-step Booking Process</Item>
            <Item>Accept all card payments</Item>
            <Item>
              Accept Apple Pay and Google Pay (<b>coming soon</b>)
            </Item>
            <Item>Simple Stripe Set-up (payment provider)</Item>
            <Item>Integrate Stripe with accounts software</Item>
            <Item>Absorb or Pass on Service Fee</Item>
            <Title>Engaging Newsletters</Title>
            <Item>Send Unlimited Newsletters</Item>
            <Item>Import up to 500 Recipients</Item>
            <Item>Automated Booking Lists</Item>
            <Item>Analytics & Tracking</Item>
            <Item>
              Insert Images & Attach Files (<b>coming soon</b>)
            </Item>
            <Item>
              Newsletter Templates (<b>coming soon</b>)
            </Item>
          </List>
          <VStack
            alignItems="flex-start"
            textAlign="left"
            pl={['1rem', '2rem']}
            w="full"
            fontSize="sm"
            color="#7d7d7d"
          >
            <Text>* Subject to change</Text>
            <Text>* Not including the Stripe Fee (payment provider) at 1.4% + 20p</Text>
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}

const Title = ({ children }: any) => (
  <ListItem
    display="flex"
    alignItems="center"
    borderBottom="1px solid #E5E5E5"
    pb="1rem"
    w="full"
    pl={[0, '1rem']}
    pt="0.5rem"
  >
    <Text textAlign="left" fontWeight="bold" fontSize="lg">
      {children}
    </Text>
  </ListItem>
)
const Item = ({ children }: any) => (
  <ListItem
    display="flex"
    alignItems="center"
    borderBottom="1px solid #E5E5E5"
    pb="1rem"
    w="full"
    pl={[0, '1rem']}
  >
    <ListIcon as={StarSvg} w={['24px', '32px']} h={['24px', '32px']} />
    <Text textAlign="left">{children}</Text>
  </ListItem>
)

const Dots = () => (
  <>
    <Dot
      bg="#3176EE"
      size="1rem"
      top="150px"
      right="200px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      bg="#F4B7C4"
      size="1rem"
      top="200px"
      left="160px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      border="8px solid #F9D278"
      top="250px"
      right="160px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      bg="#3176EE"
      size="1rem"
      top="400px"
      left="200px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      bg="#F4B7C4"
      size="40px"
      top="550px"
      right="200px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      bg="#3176EE"
      size="1rem"
      top="700px"
      left="240px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      bg="#F4B7C4"
      size="40px"
      top="800px"
      left="180px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      bg="#F9D278"
      size="22px"
      top="1300px"
      right="200px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      border="8px solid #F9D278"
      top="1450px"
      left="160px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      bg="#3176EE"
      size="1rem"
      top="1600px"
      right="150px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      image="pricing-dot1"
      size="46px"
      top="30px"
      left="260px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      image="pricing-dot2"
      size="56px"
      top="1150px"
      left="220px"
      display={['none', 'none', 'none', 'block']}
    />
    <Dot
      image="pricing-dot3"
      size="60px"
      top="900px"
      right="150px"
      display={['none', 'none', 'none', 'block']}
    />
  </>
)

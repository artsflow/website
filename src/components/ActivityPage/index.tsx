import React from 'react'
import { Box, Grid, GridItem, Text, Heading, Button, VStack, HStack } from '@chakra-ui/react'
import GoogleMap from 'google-map-react'
import { RRuleSet, rrulestr } from 'rrule'
import { format } from 'date-fns'

import { GCP_MAPS_KEY } from 'lib/config'
import HourglassIcon from 'svg/activity/hourglass.svg'
import ClockwiseIcon from 'svg/activity/clockwise.svg'
import UsercircleplusIcon from 'svg/activity/usercircleplus.svg'
import { Meta } from '../Meta'
import { ImageGallery } from '../ImageGallery'

const grid1c = `
  "gallery"
  "description"
  "info"
  "about"
  "location"
  "reviews"
  "order"
`

const grid2c = `
  "gallery gallery info"
  "description description about"
  "description description location"
  "order order reviews"
`

export function ActivityPage({ activity }: any) {
  const { title, description, images, location, whatToBring } = activity
  console.log(activity)

  const { lat, lng } = location.geocode

  return (
    <>
      <Meta title={title} />
      <Box bg={['white', 'white', '#f9f9f9']} pt={['0', '0', '1rem']}>
        <Grid
          m="0 auto"
          p={[0, '2rem']}
          maxW={['100%', '100%', '1200px']}
          templateAreas={[grid1c, grid1c, grid2c]}
          templateColumns={['', '', '1fr 1fr 1fr']}
          templateRows={['', '', '', '1fr 0.3fr 0.3fr 1fr']}
          gap="20px 0px"
        >
          <GridItem gridArea="gallery">
            <Gallery images={images} />
          </GridItem>
          <GridItem gridArea="info">
            <Info {...activity} />
          </GridItem>
          <GridItem gridArea="about" bg="white" rounded="1rem" p={['1.5rem', '2rem']}>
            <Heading as="h2" fontSize="xl" mb="1rem">
              About the artist
            </Heading>
          </GridItem>
          <GridItem
            gridArea="location"
            order={[1, 1]}
            bg="white"
            rounded="1rem"
            p={['1.5rem', '2rem']}
          >
            <Location lat={lat} lng={lng} />
          </GridItem>
          <GridItem gridArea="reviews" order={[2, 2]}>
            reviews
          </GridItem>
          <GridItem
            gridArea="description"
            px={['1.5rem', '1.5rem', '3rem']}
            mt={['0.5rem', '1rem']}
          >
            <Title text={title} fontSize={['2xl', '2xl']} />
            <Description text={description} />
            <WhatToBring text={whatToBring} />
          </GridItem>
          <GridItem gridArea="order" order={[3, 3]} px={['1.5rem', '1.5rem', '3rem']}>
            <AvailableDates {...activity} />
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

const Gallery = ({ images }: any) => (
  <Box
    h={['260px', '428px']}
    w="full"
    roundedTopLeft={[0, 0, 0, '1rem']}
    roundedBottomLeft="1rem"
    overflow="hidden"
  >
    <ImageGallery images={images} />
  </Box>
)

const Info = ({ category, capacity, frequency, duration }: any) => {
  const { rrules } = frequency
  const rruleSet = new RRuleSet()
  rrules.forEach((r: string) => rruleSet.rrule(rrulestr(r)))
  const [nextSession] = rruleSet.all()

  return (
    <VStack
      bg="white"
      h="full"
      spacing="2rem"
      p={[0, '2rem']}
      roundedBottomRight="1rem"
      roundedTopRight="1rem"
      justifyContent="center"
    >
      <Heading
        as="h2"
        fontSize="xl"
        alignSelf="flex-start"
        px="1.5rem"
        display={['block', 'block', 'none']}
      >
        Activity details
      </Heading>
      <Box
        color="af.pink"
        fontWeight="bold"
        alignSelf="flex-start"
        display={['none', 'none', 'block']}
      >
        {category}
      </Box>
      <HStack spacing="10px">
        <VStack
          bg="#edf8fa"
          rounded="10px"
          p="1rem"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <HourglassIcon />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Duration
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {duration} min
          </Text>
        </VStack>
        <VStack
          bg="#fcf2f7"
          rounded="10px"
          p="1rem"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <ClockwiseIcon />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Next session
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {format(nextSession, 'dd MMM')}
          </Text>
        </VStack>
        <VStack
          bg="#fffaea"
          rounded="10px"
          p="1rem"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <UsercircleplusIcon />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Capacity
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {capacity} people
          </Text>
        </VStack>
      </HStack>
      <Button
        bg="af.teal"
        color="white"
        fontSize="xl"
        alignSelf="flex-start"
        px="2rem"
        py={['1.5rem', '2rem']}
        w="full"
        rounded="12px"
        display={['none', 'none', 'flex']}
      >
        Book now
      </Button>
    </VStack>
  )
}

const Title = ({ text, ...rest }: any) => (
  <Heading mb="1rem" {...rest}>
    {text}
  </Heading>
)

const Description = ({ text }: any) => {
  return text.split('\n').map((line: string, i: number) => (
    <Text color="#616167" key={i} overflowWrap="anywhere" mb="1rem">
      {line}
    </Text>
  ))
}

const WhatToBring = ({ text }: any) => {
  const content = text.split('\n').map((line: string, i: number) => (
    <Text color="#616167" key={i} overflowWrap="anywhere" mb="1rem">
      {line}
    </Text>
  ))

  return (
    <>
      <Heading as="h2" fontSize="xl" mt="2rem" mb="1rem">
        What to bring
      </Heading>
      {content}
    </>
  )
}

const Location = ({ lat, lng }: any) => (
  <Box>
    <Heading as="h3" fontSize="xl" mb="1rem">
      Location
    </Heading>
    <Box
      position="relative"
      maxW="full"
      w="full"
      h={['160px', '200px']}
      borderRadius="20px"
      overflow="hidden"
      bg="pink.100"
    >
      <GoogleMap
        center={{ lat, lng }}
        defaultZoom={16}
        bootstrapURLKeys={{ key: GCP_MAPS_KEY as string }}
        options={{
          fullscreenControl: false,
        }}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMap>
    </Box>
  </Box>
)

const Marker: React.FC<any> = () => (
  <Box
    w="1rem"
    h="1rem"
    borderWidth="0.3rem"
    borderColor="af.teal"
    borderRadius="full"
    bg="white"
    boxShadow="0px 3px 8px -1px rgba(50, 50, 71, 0.05)"
  />
)

const AvailableDates = ({ frequency }: any) => {
  const { rrules } = frequency
  const rruleSet = new RRuleSet()
  rrules.forEach((r: string) => rruleSet.rrule(rrulestr(r)))

  // rruleSet.all().map(console.log)

  return (
    <Box>
      <Heading as="h2" fontSize="xl" mb="1rem">
        Available Dates
      </Heading>
      <Button
        bg="af.teal"
        color="white"
        fontSize="xl"
        alignSelf="flex-start"
        px="2rem"
        py={['1.5rem', '2rem']}
        w={['100%', '400px']}
        rounded="12px"
      >
        Book now
      </Button>
    </Box>
  )
}

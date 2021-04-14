import React from 'react'
import { Box, Grid, GridItem, Text, Heading, Button } from '@chakra-ui/react'
import GoogleMap from 'google-map-react'
import { RRuleSet, rrulestr } from 'rrule'

import { GCP_MAPS_KEY } from 'lib/config'
import { Meta } from '../Meta'
import { ImageGallery } from '../ImageGallery'

const grid1c = `
  "gallery"
  "info"
  "description"
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
  const { title, description, images, location } = activity

  const { lat, lng } = location.geocode

  return (
    <>
      <Meta title={title} />
      <Box bg="#f9f9f9" pt={['0', '0', '1rem']}>
        <Grid
          m="0 auto"
          p={[0, '2rem']}
          maxW={['100%', '100%', '1200px']}
          templateAreas={[grid1c, grid1c, grid2c]}
          templateColumns={['', '', '1fr 1fr 1fr']}
          templateRows={['', '', '', '1fr 1fr 1fr 1fr']}
          gap="20px 0px"
        >
          <GridItem gridArea="gallery">
            <Gallery images={images} />
          </GridItem>
          <GridItem gridArea="info">
            <Info />
          </GridItem>
          <GridItem gridArea="about" bg="white" rounded="1rem" p={['1.5rem', '2rem']}>
            <Heading as="h2" fontSize="2xl">
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
          <Box gridArea="description" p={['1.5rem', '1.5rem', '3rem']}>
            <Title text={title} />
            <Description text={description} />
            <Heading as="h2" fontSize="2xl">
              What to bring
            </Heading>
          </Box>
          <GridItem gridArea="order" order={[3, 3]}>
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

const Info = () => (
  <Box bg="white" h="full" roundedBottomRight="1rem" roundedTopRight="1rem">
    info
  </Box>
)

const Title = ({ text }: any) => <Heading mb="1rem">{text}</Heading>

const Description = ({ text }: any) => {
  return text.split('\n').map((line: string, i: number) => (
    <Text key={i} overflowWrap="anywhere" mb="1rem">
      {line}
    </Text>
  ))
}

const Location = ({ lat, lng }: any) => (
  <Box>
    <Heading as="h2" fontSize="2xl">
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
      <Heading as="h2" fontSize="2xl">
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

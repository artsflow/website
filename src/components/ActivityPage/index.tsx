import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'

import { Meta } from '../Meta'
import {
  Info,
  Gallery,
  Title,
  Description,
  WhatToBring,
  Location,
  AvailableDates,
} from './components'

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
          <GridItem gridArea="reviews" order={[2, 2]} />
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

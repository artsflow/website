import { Box, Flex, Icon, Grid, GridItem, VStack } from '@chakra-ui/react'
import Link from 'next/link'

import ArtsflowSvg from 'svg/artsflow.svg'
import { Meta } from '../Meta'

import {
  Info,
  Gallery,
  Title,
  Description,
  WhatToBring,
  Location,
  AvailableDates,
  Share,
  AboutCreative,
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

export function ActivityPage({ activity, profile }: any) {
  const { id, title, description, images, location, whatToBring } = activity
  const { lat, lng } = location.geocode
  console.log(activity, profile)

  // return (
  //   <Box maxW={['full', 'full', '1200px']}>
  //     <Grid p="2rem">
  //       <AvailableDates {...activity} />
  //     </Grid>
  //   </Box>
  // )

  return (
    <Box>
      <Meta
        title={title}
        description={description}
        url={`https://artsflow.com/a/${id}`}
        image={images[0]}
      />
      <Box bg={['white', 'white', '#f9f9f9']} pt={['0', '1.5rem', '1.5rem']}>
        <VStack
          display={['none', 'block', 'block']}
          spacing="0"
          m="0 auto"
          px={[0, '2rem']}
          mb="20px"
          maxW={['full', 'full', '1200px']}
        >
          <Link href="/">
            <Flex as="a" title="Artsflow" w="107px" mx="auto">
              <Icon as={ArtsflowSvg} w="107px" h="24px" mx="auto" />
            </Flex>
          </Link>
          <Share {...activity} />
        </VStack>
        <Grid
          m="0 auto"
          px={[0, '2rem']}
          maxW={['full', 'full', '1200px']}
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
            <AboutCreative profile={profile} />
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
    </Box>
  )
}

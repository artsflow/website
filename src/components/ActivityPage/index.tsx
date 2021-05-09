import { Box, Flex, Icon, Grid, GridItem, VStack, IconButton } from '@chakra-ui/react'
import Link from 'next/link'

import ArtsflowSvg from 'svg/artsflow.svg'
import ShareSvg from 'svg/activity/share.svg'
import { getImageKitUrl } from 'lib/utils'
import { ARTSFLOW_URL } from 'lib/config'
import { Meta } from '../Meta'

import {
  Info,
  Gallery,
  Title,
  Description,
  WhatToBring,
  Location,
  OrderBox,
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
  const [image] = images

  return (
    <Box>
      <Meta
        title={title}
        description={description}
        url={`${ARTSFLOW_URL}/a/${id}`}
        image={getImageKitUrl(image, { w: 1200, h: 627 })}
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
          <Flex justifyContent="flex-end">
            <Share
              id={id}
              title={title}
              TriggerButton={(props: any) => (
                <IconButton aria-label="share" isRound icon={<ShareSvg />} {...props} />
              )}
            />
          </Flex>
        </VStack>
        <Grid
          m="0 auto"
          px={[0, '2rem']}
          maxW={['full', 'full', '1200px']}
          templateAreas={[grid1c, grid1c, grid2c]}
          templateColumns={['', '', '1fr 1fr 1fr']}
          templateRows={['', '', '', '0.5fr 0.3fr 0.3fr 1fr']}
          gap="20px 0px"
        >
          <GridItem gridArea="gallery">
            <Gallery images={images} />
          </GridItem>
          <GridItem gridArea="info">
            <Info {...activity} />
          </GridItem>
          <GridItem gridArea="about">
            <AboutCreative profile={profile} />
          </GridItem>
          <GridItem gridArea="location">
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
            <OrderBox {...activity} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

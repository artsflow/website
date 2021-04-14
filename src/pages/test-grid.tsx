import { Grid, GridItem } from '@chakra-ui/react'

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

export default function test() {
  return (
    <Grid
      margin="0 auto"
      maxW={['100%', '100%', '1200px']}
      templateAreas={[grid1c, grid1c, grid2c]}
      templateColumns={['', '', '', '1fr 1fr 1fr']}
      templateRows={['', '', '', '1fr 1fr 1fr 1fr']}
      gap="0px 0px"
    >
      <GridItem gridArea="gallery" bg="pink.100">
        video gallery
      </GridItem>
      <GridItem gridArea="info" bg="blue.100">
        info <br />
        info <br />
        info <br />
      </GridItem>
      <GridItem gridArea="about" bg="orange.100">
        about <br />
        about <br />
        about <br />
        about <br />
      </GridItem>
      <GridItem gridArea="location" order={[1, 1]} bg="yellow.100">
        location
      </GridItem>
      <GridItem gridArea="reviews" order={[2, 2]} bg="red.200">
        reviews
      </GridItem>
      <GridItem gridArea="description" bg="green.100">
        description <br />
        description <br />
        description <br />
        description <br />
        description <br />
        description <br />
      </GridItem>
      <GridItem gridArea="order" order={[3, 3]} bg="red.400">
        available dates
        <br /> book
      </GridItem>
    </Grid>
  )
}

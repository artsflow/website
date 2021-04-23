import { Box, Heading } from '@chakra-ui/react'
import GoogleMap from 'google-map-react'

import { GCP_MAPS_KEY } from 'lib/config'

export const Location = ({ lat, lng }: any) => (
  <Box
    order={[1, 1]}
    bg="white"
    rounded="1rem"
    p={['1.5rem', '2rem']}
    boxShadow={[0, 0, '0px 3px 8px -1px rgba(50, 50, 71, 0.05)']}
  >
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

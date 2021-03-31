import React from 'react'
import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  HStack,
} from '@chakra-ui/react'
import GoogleMap from 'google-map-react'
import { RRuleSet, rrulestr } from 'rrule'

import { GCP_MAPS_KEY } from 'lib/config'
import { Meta, ImageGallery } from 'components'
import { firestore, postToJSON } from 'lib/firebase'

export async function getServerSideProps({ params }: any) {
  const { id } = params
  const docRef = firestore.doc(`/activities/${id}`)
  const doc = await docRef.get()

  if (!doc.exists) {
    return {
      notFound: true,
    }
  }

  return {
    props: { activity: postToJSON(doc) },
  }
}

export default function Activity({ activity }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { title, description, images, location } = activity

  const { lat, lng } = location.geocode

  return (
    <Box>
      <Meta title={title} />
      <HStack p="1rem" bg="red.400" color="white" fontWeight="bold" justifyContent="center">
        <Text fontSize="lg">Demo activity page / Under Construction</Text>
      </HStack>
      <VStack w={['100%', '800px']} margin="0 auto" mb={['80px', '180px']}>
        <Box h={['260px', '400px']} w="full" overflow="hidden">
          <ImageGallery images={images} />
        </Box>
        <VStack
          p={['1.5rem', 0]}
          alignItems="flex-start"
          pt={['1rem', '2rem']}
          spacing={['1.5rem', '2rem']}
        >
          <Heading>{title}</Heading>
          <Text overflowWrap="anywhere">{description}</Text>

          <Heading as="h2" fontSize="2xl">
            Event details
          </Heading>

          <Heading as="h2" fontSize="2xl">
            What to bring
          </Heading>

          <Heading as="h2" fontSize="2xl">
            Location
          </Heading>
          <Box
            position="relative"
            maxW="full"
            w="full"
            h={['200px', '400px']}
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

          <Heading as="h2" fontSize="2xl">
            About the artist
          </Heading>
          <Heading as="h2" fontSize="2xl">
            Available Dates
          </Heading>

          <AvailableDates {...activity} />

          <Button
            bg="af.teal"
            color="white"
            fontSize="xl"
            alignSelf="flex-start"
            px="2rem"
            py={['1.5rem', '2rem']}
            w={['100%', '400px']}
            rounded="12px"
            onClick={onOpen}
          >
            Book now
          </Button>
        </VStack>
      </VStack>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sorry, we're not ready yet!</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb="1rem">
            <Text>Please come back in a few weeks.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

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

  rruleSet.all().map(console.log)

  return <Box />
}

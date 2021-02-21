import { Box, Flex, VStack, HStack, Text, Heading, SimpleGrid, Icon } from '@chakra-ui/react'

import CreateSvg from 'svg/landing/create.svg'
import BookSvg from 'svg/landing/book.svg'
import DeliverSvg from 'svg/landing/deliver.svg'
import EarnSvg from 'svg/landing/earn.svg'

export const Benefits = () => (
  <Flex
    px={['2rem', '4rem']}
    mb={['96px', '96px']}
    w="100%"
    alignItems="center"
    justifyContent="center"
    name="benefits"
  >
    <SimpleGrid columns={[1, 2]} spacing={10}>
      <VStack>
        <HStack
          spacing={['16px', '24px']}
          alignSelf="flex-start"
          alignItems={['center', 'flex-start']}
        >
          <Icon as={CreateSvg} boxSize={['48px', '72px']} />
          <Heading fontSize={['20px', '24px']}>Create</Heading>
        </HStack>
        <Box>
          <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
            As a Creative you can create multiple activities on our web app and publish them so that
            people can discover them locally via our mobile app.
          </Text>
        </Box>
      </VStack>
      <VStack>
        <HStack
          spacing={['16px', '24px']}
          alignSelf="flex-start"
          alignItems={['center', 'flex-start']}
        >
          <Icon as={BookSvg} boxSize={['48px', '72px']} />
          <Heading fontSize={['20px', '24px']}>Book</Heading>
        </HStack>
        <Box>
          <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
            People can easily book the arts activities they want to attend locally via the mobile
            app. You’ll be able to see how many and who has booked with you.
          </Text>
        </Box>
      </VStack>
      <VStack>
        <HStack
          spacing={['16px', '24px']}
          alignSelf="flex-start"
          alignItems={['center', 'flex-start']}
        >
          <Icon as={DeliverSvg} boxSize={['48px', '72px']} />
          <Heading fontSize={['20px', '24px']}>Deliver</Heading>
        </HStack>
        <Box>
          <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
            Deliver your arts activities to those that have booked with you locally. Users can then
            review you, save your activity or share with friends.
          </Text>
        </Box>
      </VStack>
      <VStack>
        <HStack
          spacing={['16px', '24px']}
          alignSelf="flex-start"
          alignItems={['center', 'flex-start']}
        >
          <Icon as={EarnSvg} boxSize={['48px', '72px']} />
          <Heading fontSize={['20px', '24px']}>Earn</Heading>
        </HStack>
        <Box>
          <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
            Earn from your passion. Once you’ve delivered your activity you’ll receive your payment.
            You can track your earnings and other metrics via our web app.
          </Text>
        </Box>
      </VStack>
    </SimpleGrid>
  </Flex>
)

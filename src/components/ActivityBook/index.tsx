import { useEffect, useContext } from 'react'
import { Flex, Box, Stack, Heading, Text, VStack, Icon, Image, HStack } from '@chakra-ui/react'
import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'

import ArtsflowSvg from 'svg/artsflow.svg'
import { getImageKitUrl } from 'lib/utils'
import { UserContext } from 'lib/context'
import { Meta } from '../Meta'
import { Login } from '../Login'
import { OrderInfo } from './OrderInfo'
import { PaymentInfo } from './PaymentInfo'

export const ActivityBook = ({ activity, profile }: any) => {
  const { id, title, images, price, duration } = activity
  const { state } = useStateMachine() as any
  const router = useRouter()
  const { user } = useContext(UserContext)

  const { displayName } = profile
  const [image] = images

  useEffect(() => {
    const { date, tickets, time } = state.order || {}
    if (!date || !tickets || !time) {
      router.push(`/a/${id}`)
    }
  }, [])

  return (
    <>
      <Meta title={`Join ${title}`} />
      <VStack
        bg="#f9f9f9"
        pt={[0, '1.5rem']}
        pb="4rem"
        minH={['calc(100vh - 153px)', 'calc(100vh - 95px)']}
        spacing="1.5rem"
      >
        <Flex mb={['1rem', '3rem']} display={['none', 'flex']}>
          <Icon as={ArtsflowSvg} w="107px" h="24px" mx="auto" />
        </Flex>
        <HStack>
          <Box w="50px" h="6px" bg="af.teal" rounded="3px" />
          <Box w="50px" h="6px" bg={user.email ? 'af.teal' : 'gray'} rounded="3px" />
          <Box w="50px" h="6px" bg="gray" rounded="3px" />
        </HStack>
        <VStack
          bg="white"
          py={['2rem', '4rem']}
          maxW={['full', '800px']}
          w="full"
          rounded={[0, '1rem']}
          alignItems="flex-start"
        >
          <Heading mb={['1rem', '1.5rem']} fontSize="md" alignSelf="center">
            Confirm your booking
          </Heading>
          <Image w="full" h={['200px', '360px']} src={getImageKitUrl(image, { w: 800, h: 360 })} />
          <VStack
            px={['2rem', '2.5rem']}
            alignItems="flex-start"
            w="full"
            spacing={['1rem', '1.5rem']}
          >
            <Stack
              direction={['column', 'row']}
              mt={['1rem', '1.5rem']}
              alignItems={['flex-start', 'center']}
            >
              <Heading fontSize="2xl">{title}</Heading>t
              <Text fontSize="2xl"> with {displayName}</Text>
            </Stack>
            <OrderInfo duration={duration} price={price} />
          </VStack>
          <VStack w="full" pt="2rem">
            <Login />
            <PaymentInfo />
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}

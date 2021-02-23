import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Stack, Text, Heading, VStack } from '@chakra-ui/react'

import { gtmEvent } from 'lib/gtm'
import { Meta } from 'components'
import { Footer } from 'components/landing/Footer'

export default function Home(): JSX.Element {
  const { query } = useRouter()
  const { name } = query

  useEffect(() => {
    gtmEvent({ event: 'generate_lead' })
  }, [])

  return (
    <>
      <Meta title="Thank you!" />
      <Stack bg="#F0F8F9" h="100vh">
        <VStack flex="1" justifyContent="center" alignItems="center">
          <Heading mb="20px" fontSize="3xl">
            Thank you, {name}
          </Heading>
          <Text fontSize="xl">thank you text here</Text>
        </VStack>
        <Footer bg="white" w="100%" maxW="100%" />
      </Stack>
    </>
  )
}

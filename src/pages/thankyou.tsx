import React from 'react'
import { useRouter } from 'next/router'

import { Stack, Text, Heading } from '@chakra-ui/react'

export default function Home(): JSX.Element {
  const { query } = useRouter()
  const { name } = query

  return (
    <Stack justifyContent="center" alignItems="center" bg="#F0F8F9" h="100vh">
      <Heading mb="20px" fontSize="3xl">
        Thank you, {name}
      </Heading>
      <Text fontSize="xl">thank you text here</Text>
    </Stack>
  )
}

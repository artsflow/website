import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Stack, Text, Heading } from '@chakra-ui/react'

import { Meta } from 'components'
import { gtmEvent } from 'lib/gtm'

export default function Home(): JSX.Element {
  const { query } = useRouter()
  const { name } = query

  useEffect(() => {
    gtmEvent({ event: 'generate_lead' })
  }, [])

  return (
    <>
      <Meta title="Thank you!" />
      <Stack justifyContent="center" alignItems="center" bg="#F0F8F9" h="100vh">
        <Heading mb="20px" fontSize="3xl">
          Thank you, {name}
        </Heading>
        <Text fontSize="xl">thank you text here</Text>
      </Stack>
    </>
  )
}

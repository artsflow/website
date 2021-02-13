import React from 'react'
import { Text, VStack } from '@chakra-ui/core'
import Head from 'next/head'

import ArtsflowSvg from 'svg/artsflow.svg'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Artsflow</title>
      </Head>
      <VStack justifyContent="center" h="100vh" alignItems="center">
        <ArtsflowSvg width="200" height="45" />
        <Text color="af.violet" fontSize="xs">
          coming soon...
        </Text>
      </VStack>
    </>
  )
}

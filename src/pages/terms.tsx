import React from 'react'
import { VStack } from '@chakra-ui/react'

import { Meta } from 'components'
import { MD } from 'lib'

export default function Terms({ content }: any): JSX.Element {
  return (
    <>
      <Meta title="Terms and conditions | Artsflow" />
      <VStack
        flex="1"
        maxW="900px"
        m="0 auto"
        mb={['6rem', '6rem']}
        pt={['2rem', '4rem']}
        px="8"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {MD(content)}
      </VStack>
    </>
  )
}

export async function getStaticProps() {
  // @ts-ignore
  const content = await import(`content/terms.md`)
  return {
    props: {
      content: content.default,
    },
  }
}

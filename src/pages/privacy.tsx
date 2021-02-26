import React from 'react'
import { VStack } from '@chakra-ui/react'

import { Meta } from 'components'
import { MD } from 'lib'

export default function Privacy({ content }: any): JSX.Element {
  return (
    <>
      <Meta title="Terms and conditions | Artsflow" />
      <VStack
        flex="1"
        maxW="900px"
        m="0 auto"
        pt={['80px', '160px']}
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
  const content = await import(`content/privacy.md`)
  return {
    props: {
      content: content.default,
    },
  }
}

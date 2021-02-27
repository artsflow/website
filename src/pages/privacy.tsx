import React from 'react'
import { VStack } from '@chakra-ui/react'

import { Meta } from 'components'
import { MD } from 'lib'

export default function Privacy({ content }: any): JSX.Element {
  return (
    <>
      <Meta title="Terms and conditions | Artsflow" />
      <style global jsx>{`
        tr,
        td,
        th {
          border: 1px solid gray;
          padding: 5px;
        }
        table {
          margin-bottom: 20px;
        }
      `}</style>
      <VStack
        flex="1"
        maxW="900px"
        m="0 auto"
        mb={['0px', '80px']}
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

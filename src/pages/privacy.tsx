import React from 'react'
import { Stack, Text, Heading, VStack } from '@chakra-ui/react'

import { Meta } from 'components'

export default function Home(): JSX.Element {
  return (
    <>
      <Meta title="Privacy policy | Artsflow" />
      <Stack>
        <VStack flex="1" maxW="900px" m="0 auto" pt={['80px', '160px']} px="8">
          <Heading mb="20px" fontSize="2xl" alignSelf="flex-start">
            Our privacy policy
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
            sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet
            tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui
            fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
            fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis
            nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in
            suscipit massa vehicula eu.
          </Text>
        </VStack>
      </Stack>
    </>
  )
}

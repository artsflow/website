import React from 'react'
import { Box, VStack, Text, Heading } from '@chakra-ui/react'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

import { Meta } from 'components'
import { firestore } from 'lib/firebase'

export default function Activity() {
  const router = useRouter()
  const id = router.asPath.split('/')[2]
  const [activity] = useDocumentDataOnce(firestore.doc(`/activities/${id}`))

  if (!activity) return null

  const { title, description } = activity
  console.log(activity)

  return (
    <Box>
      <Meta title={title} />
      <VStack w={['100%', '800px']} margin="0 auto">
        <Box h={['260px', '400px']} bg="pink.100" w="full" />
        <VStack p={['1.5rem']}>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </VStack>
    </Box>
  )
}

import { VStack, Text, Heading } from '@chakra-ui/react'

export const Intro = () => (
  <VStack w="100%" p={['2rem']} py={['80px', '160px']} alignItems="center" justifyContent="center">
    <Heading fontSize={['2rem', '3rem']} mb="32px" textAlign="center" fontWeight="semibold">
      Finally, a platform for the arts!
    </Heading>
    <Text fontSize={['1.125rem', '1.5rem']} px={[0, '10%']}>
      Artsflow is a tailor-made platform for the Arts Sector enabling creative practitioners to
      easily create, book, deliver and earn a living from their passion. We will help you to connect
      with people locally, so that you can share your passion with them.
    </Text>
  </VStack>
)

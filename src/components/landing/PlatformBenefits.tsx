import { Flex } from '@chakra-ui/react'

import { Content, Benefits } from './common'

const benefits = {
  1: {
    title: 'Create your activities',
    description:
      'As a Creative you can create multiple activities on our web app and publish them so that people can discover them locally via our mobile app.',
  },
  2: {
    title: 'Receive bookings',
    description:
      'People can easily book the arts activities they want to attend locally via the mobile app. You’ll be able to see how many and who has booked with you.',
  },
  3: {
    title: 'Deliver your activities',
    description:
      'Deliver your arts activities to those that have booked with you locally. Users can then review you, save your activity or share with friends.',
  },
  4: {
    title: 'Generate an income',
    description:
      'Earn from your passion. Once you’ve delivered your activity you’ll receive your payment. You can track your earnings and other metrics via our web app.',
  },
}

export const PlatformBenefits = () => (
  <>
    <Content
      title="Finally, a platform for the arts!"
      subtitle="Artsflow is a tailor-made platform for the Arts Sector enabling creative practitioners to
      easily create, book, deliver and earn a living from their passion. We will help you to connect
      with people locally, so that you can share your passion with them."
    />
    <Flex
      px={['2rem', '4rem']}
      mb={['96px', '96px']}
      w="100%"
      alignItems="center"
      justifyContent="center"
      name="benefits"
    >
      <Benefits data={benefits} />
    </Flex>
  </>
)

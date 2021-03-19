import { Flex } from '@chakra-ui/react'

import SquaresSvg from 'svg/landing/squares.svg'
import CalendarSvg from 'svg/landing/calendar.svg'
import ChatSvg from 'svg/landing/chat.svg'
import StarSvg from 'svg/landing/star.svg'

import { Content, Benefits } from './common'

const benefits = {
  1: {
    icon: SquaresSvg,
    title: 'Explore the arts',
    description:
      'Easily browse and discover arts activities local to you. Discover an array of arts activities led by passionate and skilled Creatives.',
  },
  2: {
    icon: CalendarSvg,
    title: 'Book your place',
    description:
      'Booking and paying for arts activities has never been easier. Whatever your creative interests are you’ll be able to find and book them on Artsflow.',
  },
  3: {
    icon: ChatSvg,
    title: 'Connect to Creatives',
    description:
      'Attend arts activities led by local Creatives. If you have any questions just message them in-app with any specific requirements you might have.',
  },
  4: {
    icon: StarSvg,
    title: 'New experiences await',
    description:
      'Maybe you have a creative hobby and you’d like learn new skills and techniques or maybe you’d like to learn something new.',
  },
}

export const PlatformBenefits = () => (
  <>
    <Content
      title="Finally, all of the arts in one place!"
      subtitle="Artsflow is a mobile app platform for the Arts helping people to easily find, book and pay for arts activities. Explore your creativity and learn new skills with Artsflow."
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

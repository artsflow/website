import { VStack } from '@chakra-ui/react'

import { Hero } from './Hero'
import { PlatformBenefits } from './PlatformBenefits'
import { Join } from './Join'
import { Footer } from './Footer'

import { DiscoverMobileApp } from './DiscoverMobileApp'
import { DiscoverWebApp } from './DiscoverWebApp'
import { Testimonials } from './Testimonials'

export default function Landing(): JSX.Element {
  return (
    <>
      <Hero />
      <VStack maxW={['100%', '1440px']} m="auto" overflow="hidden">
        <PlatformBenefits />
        <DiscoverMobileApp />
        <Testimonials />
        <DiscoverWebApp />
      </VStack>
      <Join />
      <Footer />
    </>
  )
}

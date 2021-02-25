import { VStack } from '@chakra-ui/react'

import { Hero } from './Hero'
import { PlatformBenefits } from './PlatformBenefits'
import { Join } from './Join'

import { DiscoverMobileApp } from './DiscoverMobileApp'
import { DiscoverWebApp } from './DiscoverWebApp'
import { About } from './About'
import { Why } from './Why'

export default function Landing(): JSX.Element {
  return (
    <>
      <Hero />
      <VStack maxW={['100%', '1440px']} m="auto" overflow="hidden">
        <PlatformBenefits />
        <DiscoverMobileApp />
        <DiscoverWebApp />
        <About />
        <Why />
      </VStack>
      <Join />
    </>
  )
}

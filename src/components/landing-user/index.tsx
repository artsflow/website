import { useEffect } from 'react'
import { VStack } from '@chakra-ui/react'

import { Hero } from './Hero'
import { PlatformBenefits } from './PlatformBenefits'
import { Join } from './Join'

import { DiscoverMobileApp } from './DiscoverMobileApp'
import { About } from './About'
import { Why } from './Why'

export default function Landing(): JSX.Element {
  useEffect(() => {
    // @ts-ignore
    if (window?.$crisp) window.$crisp.push(['do', 'chat:hide'])
  }, [])

  return (
    <>
      <Hero />
      <VStack maxW={['100%', '1440px']} m="auto" overflow="hidden">
        <PlatformBenefits />
        <DiscoverMobileApp />
        <About />
        <Why />
      </VStack>
      <Join type="footer" />
    </>
  )
}

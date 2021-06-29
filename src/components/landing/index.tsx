import { useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
// @ts-ignore
import { useRouter } from 'next/router'

import { trackLandingPageView } from 'analytics'
import { Hero } from './Hero'
import { PlatformBenefits } from './PlatformBenefits'
import { Join } from './Join'

// import { DiscoverMobileApp } from './DiscoverMobileApp'
import { DiscoverWebApp } from './DiscoverWebApp'
import { About } from './About'
import { Why } from './Why'

export default function Landing(): JSX.Element {
  const router = useRouter()
  const { utm_source: utmSource } = router.query

  useEffect(() => {
    // @ts-ignore
    if (window?.$crisp) window.$crisp.push(['do', 'chat:hide'])
    trackLandingPageView({ source: utmSource })
  }, [])

  return (
    <>
      <Hero />
      <VStack maxW={['100%', '1440px']} m="auto" overflow="hidden">
        <PlatformBenefits />
        {/* <DiscoverMobileApp /> */}
      </VStack>
      <Join type="midway" />
      <VStack maxW={['100%', '1440px']} m="auto" pt={['80px', 0]} overflow="hidden">
        <DiscoverWebApp />
        <About />
        <Why />
      </VStack>
      <Join type="footer" />
    </>
  )
}

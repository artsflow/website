import { useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
// @ts-ignore
import { useMixpanel } from 'react-mixpanel-browser'
import { useRouter } from 'next/router'

import { Hero } from './Hero'
import { PlatformBenefits } from './PlatformBenefits'
import { Join } from './Join'

import { DiscoverMobileApp } from './DiscoverMobileApp'
import { About } from './About'
import { Why } from './Why'

export default function Landing(): JSX.Element {
  const router = useRouter()
  const mixpanel = useMixpanel()
  const { utm_source: utmSource } = router.query

  useEffect(() => {
    // @ts-ignore
    if (window?.$crisp) window.$crisp.push(['do', 'chat:hide'])
    mixpanel.track('landing_view_user', { source: utmSource })
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

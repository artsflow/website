import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import { StateMachineProvider, createStore } from 'little-state-machine'
// @ts-ignore
import { MixpanelProvider } from 'react-mixpanel-browser'

import { Layout } from 'components'

import { initialStore } from 'lib/store'
import { UserContext } from 'lib/context'
import { useUserData } from 'hooks'
import theme from '../theme'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', (url) => {
  NProgress.done()
  window.analytics?.page(url)
})
Router.events.on('routeChangeError', () => NProgress.done())

createStore(initialStore, {
  storageType: process.browser ? window.localStorage : ({} as Storage),
  name: '__AF__',
  middleWares: [],
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const userData = useUserData()

  useEffect(() => {
    if (userData) window.analytics?.identify(userData.user.id)
  }, [])

  return (
    <MixpanelProvider token="b6e4f2b7971a646c6bbc3603382bc0fb">
      <StateMachineProvider>
        <ChakraProvider resetCSS theme={theme}>
          <UserContext.Provider value={userData}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserContext.Provider>
        </ChakraProvider>
      </StateMachineProvider>
    </MixpanelProvider>
  )
}

export default MyApp

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'

import theme from '../theme'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

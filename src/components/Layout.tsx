import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Footer } from './Footer'
import { Meta } from './Meta'

export function Layout({ children }: any) {
  const { route } = useRouter()

  return (
    <>
      <Meta />
      {route.startsWith('/join') ? children : <Box minH="calc(100vh - 95px)">{children}</Box>}
      <Footer />
    </>
  )
}

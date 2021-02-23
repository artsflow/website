import { Box } from '@chakra-ui/react'

import { Footer } from './Footer'
import { Meta } from './Meta'

export function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <Box minH="calc(100vh - 95px)">{children}</Box>
      <Footer />
    </>
  )
}

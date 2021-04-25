import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Footer } from './Footer'
import { Meta } from './Meta'

const FULL_SCREEN_ROUTES = ['/join', '/early-access']

export function Layout({ children }: any) {
  const { route } = useRouter()
  return (
    <>
      <Meta />
      {FULL_SCREEN_ROUTES.includes(route) ? (
        children
      ) : (
        <>
          <Box minH={['calc(100vh - 153px)', 'calc(100vh - 95px)']}>{children}</Box>
          <Footer />
        </>
      )}
    </>
  )
}

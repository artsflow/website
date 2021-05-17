import { useEffect, useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { UserContext } from 'lib/context'
import { Footer } from './Footer'
import { Meta } from './Meta'

const FULL_SCREEN_ROUTES = ['/join', '/early-access']

export function Layout({ children }: any) {
  const { user } = useContext(UserContext)
  const { route } = useRouter()

  useEffect(() => {
    if (user) window.analytics?.identify(user.id)
  }, [user])

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

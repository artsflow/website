import { useEffect, useContext } from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { UserContext } from 'lib/context'
import { Header } from './Header'
import { Footer } from './Footer'
import { Meta } from './Meta'

export function Layout({ children }: any) {
  const { user } = useContext(UserContext)
  const { route } = useRouter()

  useEffect(() => {
    if (user) window.analytics?.identify(user.id)
  }, [user])

  return (
    <>
      <Meta />
      {route === '/a/[...slug]' ? (
        children
      ) : (
        <>
          <VStack minH="100vh" justifyContent="space-between" spacing="0">
            <Header />
            <Box as="main" minH="100px" w="full" flex="auto">
              {children}
            </Box>
            <Footer />
          </VStack>
        </>
      )}
    </>
  )
}

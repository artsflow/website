import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Box, Stack, Text, Heading, VStack, useBreakpoint } from '@chakra-ui/react'
// @ts-ignore
import { Twitter, Facebook, Mail, Linkedin, Whatsapp } from 'react-social-sharing'

import { gtmEvent } from 'lib/gtm'
import { Meta } from 'components'

const link = `https://artsflow.com/?utm_source=share`
const message = 'Check this out: '

const CrispWithNoSSR = dynamic(() => import('../components/CrispChat'), { ssr: false })

export default function Home(): JSX.Element {
  const { query } = useRouter()
  const { name, email, utm_source: utmSource } = query
  const screen = useBreakpoint('base')
  const btnSize = screen === 'base' ? { small: true } : {}

  useEffect(() => {
    gtmEvent({ event: 'generate_lead', source: utmSource })

    if (name) {
      // @ts-ignore
      $crisp.push(['set', 'user:nickname', [name]])
    }
    if (email) {
      // @ts-ignore
      $crisp.push(['set', 'user:email', email])
    }
  }, [])

  const handleClick = (source: string) => {
    gtmEvent({ event: 'share_button', source })
  }

  return (
    <>
      <Meta title="Thank you!" />
      <Stack bg="#F0F8F9" minH="calc(100vh - 95px)">
        <VStack flex="1" justifyContent="center" alignItems="center">
          <Heading mb="20px" fontSize="3xl">
            Thank you, {name}
          </Heading>
          <Text fontSize="xl">thank you copy text here</Text>
          <Text fontSize="xl" pt={['2rem', '4rem']}>
            share copy text here
          </Text>
          <Box>
            <Facebook
              {...btnSize}
              message={message}
              link={`${link}_facebook`}
              onClick={() => handleClick('facebook')}
            />
            <Twitter
              {...btnSize}
              message={message}
              link={`${link}_twitter`}
              onClick={() => handleClick('twitter')}
            />
            <Linkedin
              {...btnSize}
              message={message}
              link={`${link}_linkedin`}
              onClick={() => handleClick('linkedin')}
            />
            <Mail
              {...btnSize}
              message={message}
              link={`${link}_email`}
              onClick={() => handleClick('email')}
            />
            <Whatsapp
              {...btnSize}
              message={message}
              link={`${link}_whatsapp`}
              onClick={() => handleClick('whatsapp')}
            />
          </Box>
          <Heading pt={['2rem', '4rem']} fontSize="2xl" as="h4">
            Have more questions?{' '}
          </Heading>
          <Text fontSize="xl" px="2rem" textAlign="center">
            Chat with us by pressing the chat bubble from the right bottom of the screen.
          </Text>
        </VStack>
      </Stack>
      <CrispWithNoSSR />
    </>
  )
}

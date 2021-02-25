import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Stack, Text, Heading, VStack, useBreakpoint } from '@chakra-ui/react'
// @ts-ignore
import { Twitter, Facebook, Mail, Linkedin, Whatsapp } from 'react-social-sharing'

import { gtmEvent } from 'lib/gtm'
import { Meta } from 'components'

const link = `https://artsflow.com/?utm_source=share`
const message = 'Check this out: '

export default function Home(): JSX.Element {
  const { query } = useRouter()
  const { name, utm_source: utmSource } = query
  const screen = useBreakpoint('base')
  const btnSize = screen === 'base' ? { small: true } : {}

  useEffect(() => {
    gtmEvent({ event: 'generate_lead', source: utmSource })
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
        </VStack>
      </Stack>
    </>
  )
}

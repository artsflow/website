import React, { useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon, Box, Flex, Stack, Text, Heading, VStack, useBreakpoint } from '@chakra-ui/react'
// @ts-ignore
import { Twitter, Facebook, Mail, Linkedin, Whatsapp } from 'react-social-sharing'
import md5 from 'md5'
// @ts-ignore
import { useMixpanel } from 'react-mixpanel-browser'

import { gtmEvent } from 'lib/gtm'
import { hotJar } from 'lib'
import { Meta } from 'components'

import ArtsflowSvg from 'svg/artsflow.svg'

const link = `https://artsflow.com/discover?utm_source=share`
const message = 'Check this out: '

const CrispWithNoSSR = dynamic(() => import('../components/CrispChat'), { ssr: false })

export default function Home(): JSX.Element {
  const { query } = useRouter()
  const mixpanel = useMixpanel()
  const screen = useBreakpoint('base')
  const { name, email = '', utm_source: utmSource } = query as any
  const btnSize = screen === 'base' ? { small: true } : {}

  useEffect(() => {
    gtmEvent({ event: 'generate_lead_user', source: utmSource })
    mixpanel.track('generate_lead_user', { source: utmSource })
    hotJar(md5(email), utmSource)
  }, [])

  const handleClick = useCallback((source: string) => {
    gtmEvent({ event: 'share_button_user', source })
    mixpanel.track('share_button_user', { source })
  }, [])

  return (
    <>
      <Meta title="Thank you!" />
      <Stack bg="#F0F8F9" minH="calc(100vh - 95px)">
        <Link href="/discover">
          <Flex as="a" w="100%" title="Artsflow">
            <Icon
              as={ArtsflowSvg}
              w={['134px', '160px']}
              h={['30px', '36px']}
              mt={['2rem', '4rem']}
              mb="20px"
              mx="auto"
            />
          </Flex>
        </Link>

        <VStack flex="1" justifyContent="center" alignItems="center" px="2rem" mb="2rem">
          <Heading mb="20px" fontSize="3xl">
            Thank you, {name}
          </Heading>
          <Text fontSize="xl">
            We'll be in touch with you shortly to update you as to our progress!
          </Text>
          <Text fontSize="xl" pt={['2rem', '4rem']}>
            Please feel free to share our Landing Page if you know anyone that might be interested
            in Artsflow.
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
            Any questions?
          </Heading>
          <Text fontSize="xl" px="2rem" textAlign="center">
            You can message us by clicking on the chat bubble in the bottom right hand corner.
          </Text>
        </VStack>
      </Stack>
      <CrispWithNoSSR name={name} email={email} />
    </>
  )
}

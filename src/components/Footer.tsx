import { Stack, VStack, HStack, Text, Icon, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import AfSvg from 'svg/af.svg'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import { GetStartedButton } from './GetStartedButton'

export const Footer = () => (
  <VStack
    m="auto"
    pt={['2rem', '2rem', '2rem']}
    pb={['3rem', '2rem']}
    px={['2rem', '4rem']}
    bg="#edf8fa"
    w="full"
  >
    <VStack py="3rem" mb="2rem" spacing="1rem" pos="relative">
      <Icon
        as={CurledArrowSvg}
        w={['100px', '160px']}
        h="70"
        position="absolute"
        right={['-20px', '-20px']}
        top={['180px', '140px']}
      />
      <Text fontWeight="bold" fontSize={['1.8rem', '2rem']} textAlign="center">
        Start your creative journey
      </Text>
      <Text>Join Artsflow today for FREE.</Text>
      <GetStartedButton location="footer" />
    </VStack>
    <Stack
      direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack alignItems="center" justifyContent="center" mt={['1rem', '1rem', 0]}>
        <Link href="/">
          <a title="Artsflow">
            <Icon as={AfSvg} w="24px" h="32px" />
          </a>
        </Link>
        <Text fontSize="14px">Copyright © 2021 Artsflow</Text>
      </HStack>
      <Stack
        direction={['column', 'column', 'column', 'row']}
        fontSize="14px"
        spacing={['1.5rem', '1.2rem']}
        alignItems="center"
      >
        <NextLink href="/creative-corner">Creative Corner</NextLink>
        <NextLink href="/why">Why Artsflow?</NextLink>
        <NextLink href="/pricing">Pricing</NextLink>
        <NextLink href="/about">About</NextLink>
        <Link isExternal href="https://support.artsflow.com/en/">
          Support
        </Link>
        <NextLink href="/terms">Terms</NextLink>
        <NextLink href="/privacy">Privacy</NextLink>
      </Stack>
    </Stack>
  </VStack>
)

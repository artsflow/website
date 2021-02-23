import { Stack, VStack, HStack, Text, Icon } from '@chakra-ui/react'
import Link from 'next/link'

import AfSvg from 'svg/af.svg'

export const Footer = (props: any) => (
  <VStack
    maxW={['100%', '1440px']}
    m="auto"
    pt={['5rem', '2rem']}
    pb={['3rem', '2rem']}
    px={['2rem', '4rem']}
    {...props}
    minH="95px"
  >
    <Stack
      direction={['column-reverse', 'row']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack alignItems="center" justifyContent="center">
        <Link href="/">
          <Icon as={AfSvg} w="24px" h="32px" />
        </Link>
        <Text fontSize="14px">Copyright © 2021 Artsflow</Text>
      </HStack>
      <HStack fontSize="14px" spacing="20px" mb={['20px !important', '0 !important']}>
        <Link href="/cookies">Cookies </Link>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </HStack>
    </Stack>
  </VStack>
)

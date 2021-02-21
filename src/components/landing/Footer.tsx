import { Link, Stack, VStack, HStack, Text, Icon } from '@chakra-ui/react'

import AfSvg from 'svg/af.svg'

export const Footer = () => (
  <VStack
    maxW={['100%', '1440px']}
    m="auto"
    pt={['5rem', '2rem']}
    pb={['3rem', '2rem']}
    px={['2rem', '4rem']}
  >
    <Stack
      direction={['column-reverse', 'row']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack alignItems="center" justifyContent="center">
        <Icon as={AfSvg} w="24px" h="32px" />
        <Text fontSize="14px">Copyright © 2021 Artsflow</Text>
      </HStack>
      <HStack fontSize="14px" spacing="20px" mb={['20px !important', '0 !important']}>
        <Link href="/cookies">Cookies</Link>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </HStack>
    </Stack>
  </VStack>
)

import { HStack, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import Logo from 'svg/artsflow.svg'

import { ARTSFLOW_APP_URL } from 'lib/config'

interface BgMap {
  [key: string]: string
}

const bg: BgMap = {
  '/why': '#fff9e7',
}

export const Header = () => {
  const { route } = useRouter()
  return (
    <HStack
      as="nav"
      h="100px"
      bg={bg[route] || '#edf8fa'}
      w="full"
      justifyContent="space-between"
      px="2rem"
    >
      <NextLink href="/">
        <Link>
          <Logo width="107px" height="24px" />
        </Link>
      </NextLink>
      <HStack display={['none', 'none', 'flex']} spacing="3rem">
        <MenuLink href="/creative-corner" title="Creative Corner" />
        <MenuLink href="/why" title="Why Artsflow?" />
        <MenuLink href="/about" title="About Us" />
        <Link
          isExternal
          href={ARTSFLOW_APP_URL}
          color="white"
          bg="af.teal"
          px="1rem"
          py="0.5rem"
          rounded="8px"
        >
          <Text fontWeight="bold">Get Started</Text>
        </Link>
      </HStack>
    </HStack>
  )
}

interface MenuLinkProps {
  href: string
  title: string
}

const MenuLink = ({ href, title }: MenuLinkProps) => {
  const { route } = useRouter()
  const selectedLine = {
    content: '""',
    position: 'absolute',
    top: '28px',
    height: '1px',
    bg: '#47BCC8',
    w: 'full',
  }

  return (
    <NextLink href={href}>
      <Link
        pos="relative"
        _before={href === route ? selectedLine : undefined}
        _hover={{
          _before: selectedLine,
        }}
      >
        <Text>{title}</Text>
      </Link>
    </NextLink>
  )
}

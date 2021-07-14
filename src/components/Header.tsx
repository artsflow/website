import { HStack, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import Logo from 'svg/artsflow.svg'
import { GetStartedButton } from './GetStartedButton'

interface BgMap {
  [key: string]: string
}

const bg: BgMap = {
  '/why': '#fff9e7',
  '/creative-corner': '#fef4f4',
  '/pricing': '#fafafa',
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
      <HStack display={['none', 'none', 'flex']} spacing="2rem">
        <MenuLink href="/creative-corner" title="Creative Corner" />
        <MenuLink href="/pricing" title="Pricing" />
        <MenuLink href="/why" title="Why Artsflow?" />
        <MenuLink href="/about" title="About Us" />
        <GetStartedButton location="header" />
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

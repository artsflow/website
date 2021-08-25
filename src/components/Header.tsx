import {
  HStack,
  VStack,
  Text,
  Link,
  Tooltip,
  Icon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'

import Logo from 'svg/artsflow.svg'
import { trackExploreClick } from 'analytics'
import { GetStartedButton } from './GetStartedButton'

interface BgMap {
  [key: string]: string
}

const bg: BgMap = {
  '/why': '#edf8fa',
  '/creative-corner': '#fae9f2',
  '/pricing': '#fafafa',
}

export const Header = () => {
  const { route } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpenMenu = () => {
    onOpen()
  }

  return (
    <HStack
      as="nav"
      h="100px"
      bg={bg[route] || '#edf8fa'}
      w="full"
      justifyContent="space-between"
      px="2rem"
      pos="relative"
    >
      <NextLink href="/">
        <Link>
          <Logo width="107px" height="24px" />
        </Link>
      </NextLink>
      <Icon
        as={GiHamburgerMenu}
        w="32px"
        h="32px"
        color="af.teal"
        display={['block', 'block', 'none']}
        onClick={handleOpenMenu}
      />
      <DesktopMenu />
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </HStack>
  )
}

const DesktopMenu = () => (
  <HStack display={['none', 'none', 'flex']} spacing="2rem">
    <MenuLink href="/" title="Home" />
    <Tooltip
      hasArrow
      label="Coming soon..."
      aria-label="Explore"
      color="black"
      bg="af.yellow"
      p="0.5rem 1rem"
      rounded="0.5rem"
    >
      <Link to="#" _hover={{ textDecor: 'none' }} onClick={() => trackExploreClick()}>
        Explore
      </Link>
    </Tooltip>
    <MenuLink href="/creative-corner" title="Creative Corner" />
    <MenuLink href="/why" title="Why Artsflow?" />
    <MenuLink href="/pricing" title="Pricing" />
    <GetStartedButton location="header" />
  </HStack>
)

const MobileMenu = ({ isOpen, onClose }: any) => {
  const { route } = useRouter()

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent py="2rem" bg={bg[route] || '#edf8fa'} onClick={onClose}>
        <VStack w="full" spacing="0rem">
          <MenuLink href="/" title="Home" />
          <MenuLink href="/creative-corner" title="Creative Corner" />
          <MenuLink href="/why" title="Why Artsflow?" />
          <MenuLink href="/pricing" title="Pricing" />
        </VStack>
      </DrawerContent>
    </Drawer>
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
    top: '44px',
    height: '1px',
    bg: '#47BCC8',
    w: 'full',
  }

  const isCC = route === '/cc/[...slug]' && href === '/creative-corner'

  return (
    <NextLink href={href}>
      <Link
        pos="relative"
        _before={href === route || isCC ? selectedLine : undefined}
        _hover={{
          _before: selectedLine,
        }}
        py={['1rem', '1rem', '']}
      >
        <Text>{title}</Text>
      </Link>
    </NextLink>
  )
}

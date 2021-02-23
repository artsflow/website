import { Button, Icon, VStack, Text, Heading, HStack, SimpleGrid, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { BsArrowRightShort } from 'react-icons/bs'

import CreateSvg from 'svg/landing/create.svg'
import BookSvg from 'svg/landing/book.svg'
import DeliverSvg from 'svg/landing/deliver.svg'
import EarnSvg from 'svg/landing/earn.svg'

import { event } from 'lib/gtag'

export const OrderButton = ({ type }: any) => {
  const router = useRouter()

  const handleClick = () => {
    event({ action: 'button_click', category: type })

    router.push({
      pathname: '/join',
      query: { src: 'testsrc' },
    })
  }

  return (
    <Button
      bg="#00616b"
      color="white"
      py="1.75rem"
      w={['100%', '300px']}
      fontSize="1.25rem"
      fontWeight="semibold"
      rightIcon={<Icon as={BsArrowRightShort} />}
      rounded="8px"
      onClick={handleClick}
    >
      Joint the waiting list
    </Button>
  )
}

export const Content = ({ title, subtitle, ...rest }: any) => (
  <VStack
    w="100%"
    p={['2rem']}
    py={['80px', '160px']}
    alignItems="center"
    justifyContent="center"
    {...rest}
  >
    <Heading fontSize={['2rem', '3rem']} mb="32px" textAlign="center" fontWeight="semibold">
      {title}
    </Heading>
    <Text fontSize={['1.125rem', '1.125rem']} px={[0, '10%']} lineHeight={['2rem', '2.25rem']}>
      {subtitle}
    </Text>
  </VStack>
)

export const Benefits = ({ data, ...rest }: any) => (
  <SimpleGrid columns={[1, 2]} spacing={10} {...rest}>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={CreateSvg} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[1].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[1].description}
        </Text>
      </Box>
    </VStack>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={BookSvg} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[2].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[2].description}
        </Text>
      </Box>
    </VStack>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={DeliverSvg} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[3].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[3].description}
        </Text>
      </Box>
    </VStack>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={EarnSvg} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[4].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[4].description}
        </Text>
      </Box>
    </VStack>
  </SimpleGrid>
)

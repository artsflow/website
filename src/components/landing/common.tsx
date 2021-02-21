import { Button, Icon, VStack, Text, Heading } from '@chakra-ui/react'

import { BsArrowRightShort } from 'react-icons/bs'

export const OrderButton = () => (
  <Button
    bg="#47BCC8"
    color="white"
    py="1.75rem"
    w={['100%', '300px']}
    fontSize="1.25rem"
    fontWeight="semibold"
    rightIcon={<Icon as={BsArrowRightShort} />}
    rounded="8px"
  >
    Joint the waiting list
  </Button>
)

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
    <Text fontSize={['1.125rem', '1.5rem']} px={[0, '10%']}>
      {subtitle}
    </Text>
  </VStack>
)

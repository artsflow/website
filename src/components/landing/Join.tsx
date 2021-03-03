import { VStack, HStack, Text, Heading, Icon } from '@chakra-ui/react'

import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
import { OrderButton } from './common'

export const Join = ({ type }: any) => (
  <VStack
    bg="rgba(71, 188, 200, 0.1)"
    p={['2rem']}
    py={['80px', '120px']}
    alignItems="center"
    justifyContent="center"
  >
    <Heading fontSize={['2rem', '3rem']} mb="24px" textAlign="center" fontWeight="semibold">
      Join the Artsflow platform before we launch publicly!
    </Heading>
    <Text
      fontSize={['1.125rem', '1.5rem']}
      px={[0, '10%']}
      mb={['2rem', '40px']}
      textAlign="center"
    >
      Sign up to receive updates on our progress and join the <b>Beta</b> release of the platform
    </Text>
    <HStack position="relative" w="100%" alignItems="center" justifyContent="center">
      <OrderButton type={type} />
      <Icon
        as={CurledArrowSvg}
        w="160"
        h="70"
        display={['none', 'none', 'block']}
        position="absolute"
        left={[0, 0, 'calc(70%)']}
        top="calc(-100%)"
      />
    </HStack>
  </VStack>
)

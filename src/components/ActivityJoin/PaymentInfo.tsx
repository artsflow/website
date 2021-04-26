import { useContext } from 'react'
import {
  Box,
  Text,
  HStack,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Elements, CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PhoneIcon, AtSignIcon } from '@chakra-ui/icons'
import { GrUser } from 'react-icons/gr'
// import { useForm } from 'react-hook-form'

import { STRIPE_KEY } from 'lib/config'
import { UserContext } from 'lib/context'
import StripeIcon from 'svg/stripe.svg'

const stripePromise = loadStripe(STRIPE_KEY as string)

export const PaymentInfo = () => {
  const { user } = useContext(UserContext)
  const { email, displayName } = user
  const fontSize = useBreakpointValue({ base: '12px', lg: '14px' })

  const CARD_OPTIONS = {
    hidePostalCode: true,
    style: {
      base: {
        fontSize,
        lineHeight: '24px',
      },
      invalid: {
        iconColor: 'red',
        color: 'red',
      },
    },
  }

  if (!email) return null

  return (
    <Elements stripe={stripePromise}>
      <VStack w={['full', '400px']} px="2rem" spacing="1rem">
        <InputGroup>
          <InputLeftAddon children={<AtSignIcon />} />
          <Input type="email" readOnly value={email} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<PhoneIcon />} />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<Icon as={GrUser} />} />
          <Input type="text" placeholder="Name on card" value={displayName} />
        </InputGroup>
        <Box w="full" border="1px solid black" p="8px" rounded="5px">
          <CardElement
            options={CARD_OPTIONS}
            onChange={(e: any) => {
              console.log(e)
            }}
          />
        </Box>
        <Button bg="af.teal" color="white" w="full" py={['1.5rem', '1rem']}>
          Pay now
        </Button>
        <HStack>
          <Text fontSize="12px">Secure payments</Text> <Icon as={StripeIcon} w="88px" h="20px" />
        </HStack>
      </VStack>
    </Elements>
  )
}

import { useState, useContext } from 'react'
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
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PhoneIcon, AtSignIcon } from '@chakra-ui/icons'
import { GrUser } from 'react-icons/gr'
import { useForm, Controller } from 'react-hook-form'

import { STRIPE_KEY } from 'lib/config'
import { UserContext } from 'lib/context'
import StripeIcon from 'svg/stripe.svg'
import { showAlert } from 'lib/utils'

const stripePromise = loadStripe(STRIPE_KEY as string)

interface Inputs {
  email: string
  name: string
  phone: string
}

export const PaymentInfo = () => {
  return (
    <Elements stripe={stripePromise}>
      <OrderForm />
    </Elements>
  )
}

const OrderForm = () => {
  const { user } = useContext(UserContext)
  const { email, displayName } = user
  const [error, setError] = useState(null) as any
  const [cardComplete, setCardComplete] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)
  const fontSize = useBreakpointValue({ base: '12px', lg: '14px' })
  const stripe = useStripe()
  const elements = useElements() as any

  const { control, handleSubmit } = useForm<Inputs>()

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

  const handleErrors = (errors: any) => {
    const { phone, name } = errors
    if (phone) {
      showAlert({ title: phone.message })
    }
    if (name) {
      showAlert({ title: name.message })
    }
  }

  const handlePayNow = async (billingDetails: any) => {
    console.log('handlePayNow', billingDetails)

    if (!stripe || !elements) {
      return
    }

    if (error) {
      elements.getElement('card').focus()
      showAlert({ title: error.message })
      console.log(error)
      return
    }

    if (cardComplete) {
      setProcessing(true)
    }

    const payload = (await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    })) as any

    setProcessing(false)

    if (payload.error) {
      setError(payload.error)
    } else {
      setPaymentMethod(payload.paymentMethod)
    }
  }

  if (!email) return null

  if (paymentMethod) {
    return (
      <VStack>
        <Text>Booking confirmed</Text>
      </VStack>
    )
  }

  return (
    <VStack
      as="form"
      w={['full', '400px']}
      px="2rem"
      spacing="1rem"
      onSubmit={handleSubmit(handlePayNow, handleErrors)}
    >
      <Controller
        name="email"
        defaultValue={email}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputGroup>
            <InputLeftAddon children={<AtSignIcon />} />
            <Input type="email" readOnly {...field} />
          </InputGroup>
        )}
      />
      <Controller
        name="phone"
        control={control}
        rules={{
          required: 'Invalid phone number',
          minLength: { value: 10, message: 'Phone minimum 10 digits' },
          maxLength: { value: 11, message: 'Phone maximum 11 digits' },
        }}
        render={({ field }) => (
          <InputGroup>
            <InputLeftAddon children={<PhoneIcon />} />
            <Input {...field} type="number" placeholder="Phone number" />
          </InputGroup>
        )}
      />
      <Controller
        name="name"
        defaultValue={displayName}
        control={control}
        rules={{
          required: 'Invalid name',
          minLength: { value: 6, message: 'Name minimum 6 characters' },
        }}
        render={({ field }) => (
          <InputGroup>
            <InputLeftAddon children={<Icon as={GrUser} />} />
            <Input {...field} type="text" placeholder="Full name" />
          </InputGroup>
        )}
      />
      <Box w="full" border="1px solid black" p="8px" rounded="5px">
        <CardElement
          options={CARD_OPTIONS}
          onChange={(e: any) => {
            setError(e.error)
            setCardComplete(e.complete)
          }}
        />
      </Box>
      <Button
        type="submit"
        bg="af.teal"
        color="white"
        w="full"
        py={['1.5rem', '1rem']}
        error={error}
        disabled={!stripe || processing}
        isLoading={processing}
      >
        Pay now
      </Button>
      <HStack>
        <Text fontSize="12px">Secure payments</Text> <Icon as={StripeIcon} w="88px" h="20px" />
      </HStack>
    </VStack>
  )
}

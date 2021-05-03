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
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import { addMinutes, addHours, getUnixTime } from 'date-fns'

import { STRIPE_KEY } from 'lib/config'
import { UserContext } from 'lib/context'
import StripeIcon from 'svg/stripe.svg'
import { showAlert } from 'lib/utils'
import { getPaymentIntent } from 'api'

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
  const { query } = useRouter()
  const { user } = useContext(UserContext)
  const { email, displayName } = user
  const [error, setError] = useState(null) as any
  const [cardComplete, setCardComplete] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [payment, setPayment] = useState({}) as any
  const fontSize = useBreakpointValue({ base: '12px', lg: '14px' })
  const { control, handleSubmit } = useForm<Inputs>()
  const stripe = useStripe()
  const elements = useElements() as any
  const [activityId] = query.slug as string
  const { state } = useStateMachine() as any
  const { date, time } = state.order || {}

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
    console.log('handlePayNow', billingDetails, error, cardComplete)
    const { phone, name } = billingDetails

    const [hh, mm] = time.split(':')
    const activityDate = addMinutes(addHours(new Date(date), +hh), +mm)
    const unixTime = getUnixTime(activityDate)
    const dateString = activityDate.toString()

    if (!stripe || !elements) {
      return
    }

    if (error || !cardComplete) {
      elements.getElement('card').focus()
      showAlert({ title: error?.message || 'Invalid card number' })
      return
    }

    if (cardComplete) {
      setProcessing(true)
    }

    const { data } = await getPaymentIntent({ activityId, date: unixTime, dateString, phone, name })

    const payload = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      },
    })

    console.log(payload)
    setProcessing(false)
    setPayment(payload)
  }

  if (!email) return null

  if (payment?.paymentIntent?.status === 'succeeded') {
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

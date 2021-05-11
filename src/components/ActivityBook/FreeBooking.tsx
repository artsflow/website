import { useState, useContext, useEffect } from 'react'
import { VStack, InputGroup, InputLeftAddon, Input, Icon, Button } from '@chakra-ui/react'
import { PhoneIcon, AtSignIcon } from '@chakra-ui/icons'
import { GrUser } from 'react-icons/gr'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'

import { UserContext } from 'lib/context'
import { showAlert, getTimestamp } from 'lib/utils'
import { Loading } from 'components/Loading'
import { useBooking } from 'hooks'
import { createFreeBooking } from 'api'

interface Inputs {
  email: string
  name: string
  phone: string
}

export const FreeBooking = () => {
  const { push, query } = useRouter()
  const { user } = useContext(UserContext)
  const { email, phone: userPhone, displayName } = user
  const [processing, setProcessing] = useState(false)
  const { control, handleSubmit } = useForm<Inputs>()
  const [activityId] = query.slug as string
  const { state } = useStateMachine() as any
  const { date, time } = state.order || {}
  const timestamp = getTimestamp(date, time)
  const [booking, loading] = useBooking(activityId, timestamp)

  const handleErrors = (errors: any) => {
    const { phone, name } = errors
    if (phone) {
      showAlert({ title: phone.message })
    }
    if (name) {
      showAlert({ title: name.message })
    }
  }

  const handleBookNow = async (bookingDetails: any) => {
    console.log('handlePayNow', bookingDetails)
    const { phone, name } = bookingDetails
    setProcessing(true)
    try {
      await createFreeBooking({ name, phone, timestamp, activityId })
    } catch (e) {
      showAlert({ title: 'Booking error', description: e.message })
    }
    setProcessing(false)
  }

  useEffect(() => {
    if (booking?.length > 0) {
      push(`/a/${activityId}/confirmed/${timestamp}`)
    }
  }, [booking])

  if (!email) return null

  if (loading) return <Loading />

  return (
    <VStack
      as="form"
      w={['full', '400px']}
      px="2rem"
      spacing="1rem"
      onSubmit={handleSubmit(handleBookNow, handleErrors)}
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
        defaultValue={userPhone}
        control={control}
        render={({ field }) => (
          <InputGroup>
            <InputLeftAddon children={<PhoneIcon />} />
            <Input {...field} type="number" placeholder="Phone number (optional)" />
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
      <Button
        type="submit"
        bg="af.teal"
        color="white"
        w="full"
        py={['1.5rem', '1rem']}
        disabled={processing}
        isLoading={processing}
      >
        Book now
      </Button>
    </VStack>
  )
}

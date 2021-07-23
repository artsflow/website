import { useState } from 'react'
import { VStack, Stack, Text, Button, Input, Icon } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { showAlert } from 'lib/utils'
import { trackNewsletterSignedUp } from 'analytics'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'

interface Inputs {
  name: string
  email: string
}

export const Newsletter = () => {
  const { reset, register, handleSubmit } = useForm<Inputs>()
  const [isLoading, setLoading] = useState(false)

  const onSubmit = async (data: Inputs) => {
    setLoading(true)
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((r) => r.json())
    if (res.ok) {
      trackNewsletterSignedUp()
      showAlert({ title: "You're now In the Flow!", status: 'success' })
      reset()
    } else {
      showAlert({ title: res.error.message })
    }
    setLoading(false)
  }

  return (
    <VStack
      spacing="1rem"
      w="full"
      py="4rem"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      pos="relative"
    >
      <Icon
        as={CurledArrowSvg}
        w={['80px', '120px']}
        h="90px"
        pos="absolute"
        top={['-80px', '-110px', '-30px']}
        right={['0px', '40px', '80px']}
        transform="rotate(-30deg)"
      />
      <Text fontSize="xl" textAlign="center" maxW="540px">
        Subscribe to our newsletter <b>In the Flow</b> to be notified about our next Creative Corner
        webinar!
      </Text>
      <Stack
        pos="relative"
        bg="#FAFAFA"
        boxShadow="5px 5px 8px rgba(50, 50, 71, 0.1)"
        rounded="8px"
        p="2rem"
        maxW="800px"
        w="full"
        direction={['column', 'row']}
        spacing="1rem"
      >
        <Input
          {...register('email', { required: true })}
          type="email"
          py="1.5rem"
          placeholder="Enter your email address..."
        />
        <Input
          {...register('name', { required: true })}
          type="text"
          py="1.5rem"
          placeholder="Enter your first name..."
        />
        <Button
          type="submit"
          bg="af.teal"
          color="white"
          px="4rem"
          py="1.5rem"
          isLoading={isLoading}
        >
          Sign me up!
        </Button>
      </Stack>
    </VStack>
  )
}

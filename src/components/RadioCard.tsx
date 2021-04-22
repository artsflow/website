import { Box, useRadio, VStack, Input } from '@chakra-ui/react'

export function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const { children } = props

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <VStack as="li" css={{ scrollSnapAlign: 'center' }}>
      <Box as="label">
        <Input {...input} display="none" />
        <VStack
          {...checkbox}
          spacing="0"
          cursor="pointer"
          borderRadius="10px"
          borderWidth="1px"
          borderColor="#E5E5E5"
          justifyContent="center"
          bg="white"
          _checked={{
            bg: '#47bcc8',
            color: 'white',
            borderColor: '#47bcc8',
          }}
          py="1rem"
          minW="84px"
        >
          {children}
        </VStack>
      </Box>
    </VStack>
  )
}

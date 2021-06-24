import { useRef, useState } from 'react'
import {
  Text,
  HStack,
  Button,
  Stack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react'

import { cancelBooking } from 'api'

export function CancelBooking({ booking }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setLoading] = useState(false)
  const cancelRef = useRef() as any

  const amount = booking?.amount / 100
  const isPaid = Number(booking?.amount) > 0

  const handleCancelBooking = async () => {
    if (!booking) return
    setLoading(true)
    await cancelBooking(booking)
    setLoading(false)
    onClose()
  }

  return (
    <>
      <Stack direction={['column', 'row']} alignItems="center" color="#616167" spacing="0">
        <HStack>
          <Text as="span">You can</Text>
          <Button
            variant="unstyled"
            fontWeight="bold"
            color="af.teal"
            textDecor="underline"
            onClick={() => onOpen()}
            p="0"
          >
            cancel
          </Button>
          <Text as="span" textAlign="center">
            your booking
          </Text>
        </HStack>
        <Text as="span" textAlign="center">
          up to 24 hours prior to the event.
        </Text>
      </Stack>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Cancel booking</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Text mb="0.5rem">Are you sure you want to cancel this booking?</Text>
            {isPaid && (
              <Text color="#616167" fontSize="sm">
                Refunds take 5-10 days to appear on a customer's statement.
                <br />
                You'll get full refund of <b>£{amount}</b>
              </Text>
            )}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleCancelBooking} isLoading={isLoading}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

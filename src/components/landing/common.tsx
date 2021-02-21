import { Button, Icon } from '@chakra-ui/react'

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

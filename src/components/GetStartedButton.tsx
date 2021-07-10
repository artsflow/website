import { Text, Link, BoxProps, LinkProps } from '@chakra-ui/react'

import { ARTSFLOW_APP_URL } from 'lib/config'

type Props = BoxProps &
  LinkProps & {
    location?: string
  }

export const GetStartedButton = ({ location, ...rest }: Props) => {
  const handleClick = () => {
    console.log('handle click analytics here', location)
  }

  return (
    <Link
      isExternal
      href={ARTSFLOW_APP_URL}
      color="white"
      bg="af.teal"
      px="1rem"
      py="0.5rem"
      rounded="8px"
      onClick={handleClick}
      {...rest}
    >
      <Text fontWeight="bold">Get Started</Text>
    </Link>
  )
}

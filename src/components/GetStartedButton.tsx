import { Text, Link, BoxProps, LinkProps } from '@chakra-ui/react'

import { ARTSFLOW_APP_URL } from 'lib/config'
import { trackGetStartedButton } from 'analytics'

type Props = BoxProps &
  LinkProps & {
    location: string
    label?: string
  }

export const GetStartedButton = ({ location, label = 'Get Started ⇾', ...rest }: Props) => {
  const handleClick = () => {
    trackGetStartedButton(location)
  }

  return (
    <Link
      isExternal
      href={ARTSFLOW_APP_URL}
      color="white"
      bg="af.violet"
      px="1rem"
      py="0.5rem"
      rounded="8px"
      onClick={handleClick}
      {...rest}
    >
      <Text fontWeight="bold">{label}</Text>
    </Link>
  )
}

import { Box, BoxProps } from '@chakra-ui/react'

type DotProps = BoxProps & {
  image?: string
}

export const Dot = ({ image, ...rest }: DotProps) => (
  <Box
    pos="absolute"
    width="42px"
    height="42px"
    rounded="full"
    {...(image ? { backgroundImage: `url(/img/${image}.webp)` } : {})}
    {...rest}
  />
)

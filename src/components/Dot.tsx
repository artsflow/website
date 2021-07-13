import { Box, BoxProps } from '@chakra-ui/react'

type DotProps = BoxProps & {
  image?: string
  size?: string
}

export const Dot = ({ image, size = '42px', ...rest }: DotProps) => (
  <Box
    pos="absolute"
    width={size}
    height={size}
    rounded="full"
    {...(image ? { backgroundImage: `url(/img/${image}.webp)` } : {})}
    {...rest}
  />
)

import {
  Icon,
  VStack,
  Text,
  Heading,
  HStack,
  SimpleGrid,
  Box,
  SimpleGridProps,
} from '@chakra-ui/react'

type Props = SimpleGridProps & {
  data: {
    [i: number]: {
      icon: any
      title: string
      description: string
    }
  }
}

export const Benefits = ({ data, ...rest }: Props) => (
  <SimpleGrid columns={[1, 1, 2]} spacing={10} textAlign="left" {...rest}>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={data[1].icon} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[1].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[1].description}
        </Text>
      </Box>
    </VStack>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={data[2].icon} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[2].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[2].description}
        </Text>
      </Box>
    </VStack>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={data[3].icon} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[3].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[3].description}
        </Text>
      </Box>
    </VStack>
    <VStack>
      <HStack
        spacing={['16px', '24px']}
        alignSelf="flex-start"
        alignItems={['center', 'flex-start']}
      >
        <Icon as={data[4].icon} boxSize={['48px', '72px']} />
        <Heading fontSize={['20px', '24px']}>{data[4].title}</Heading>
      </HStack>
      <Box>
        <Text pl={['0', '96px']} pt={['18px', 0]} mt={[0, '-30px']}>
          {data[4].description}
        </Text>
      </Box>
    </VStack>
  </SimpleGrid>
)

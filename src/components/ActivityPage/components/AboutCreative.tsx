import { Box, Avatar, Heading, HStack, Text } from '@chakra-ui/react'
import { getImageKitUrl } from 'lib/utils'

export const AboutCreative = ({ profile }: any) => {
  const { displayName, photoURL, bio } = profile
  return (
    <Box
      bg="white"
      rounded="1rem"
      p={['1.5rem', '2rem']}
      boxShadow={[0, 0, '0px 3px 8px -1px rgba(50, 50, 71, 0.05)']}
    >
      <Heading as="h2" fontSize="xl" mb="1rem">
        About the artist
      </Heading>
      <HStack spacing="1rem" mb="1rem">
        <Avatar
          name={displayName}
          width="60px"
          height="60px"
          bg="af.pink"
          color="white"
          fontSize="xs"
          src={getImageKitUrl(photoURL, { w: 60, h: 60, tr: 'fo-face' })}
        />
        <Text fontWeight="bold" fontSize="md">
          {displayName}
        </Text>
      </HStack>
      <Text color="#616167" fontSize="sm" lineHeight="md">
        {bio}
      </Text>
    </Box>
  )
}

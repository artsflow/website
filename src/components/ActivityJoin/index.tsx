import { Flex, Box, Heading, VStack, Icon, Image } from '@chakra-ui/react'

import ArtsflowSvg from 'svg/artsflow.svg'
import { getImageKitUrl } from 'lib/utils'
import { Meta } from '../Meta'

export const ActivityJoin = ({ activity }: any) => {
  const { title, images } = activity
  const [image] = images
  console.log(activity)

  return (
    <>
      <Meta title={`Join ${title}`} />
      <VStack bg="#f9f9f9" pt={[0, '1.5rem']} minH={['calc(100vh - 153px)', 'calc(100vh - 95px)']}>
        <Flex mb={['1.5rem', '4.5rem']} display={['none', 'flex']}>
          <Icon as={ArtsflowSvg} w="107px" h="24px" mx="auto" />
        </Flex>
        <VStack
          bg="white"
          mb="20px"
          py={['1rem', '2rem']}
          maxW={['full', '800px']}
          w="full"
          rounded={[0, '1rem']}
        >
          <Heading mb={['1rem', '1.5rem']} fontSize="md">
            Confirm your booking
          </Heading>
          <Image w="full" h={['200px', '360px']} src={getImageKitUrl(image, { w: 800, h: 360 })} />
          <Box alignSelf="flex-start" px={['2rem', '2.5rem']} py={['1rem', '1.5rem']}>
            <Heading fontSize="xl">{title}</Heading>
          </Box>
        </VStack>
      </VStack>
    </>
  )
}

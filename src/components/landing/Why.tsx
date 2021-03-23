import { Heading, HStack, VStack, Icon } from '@chakra-ui/react'

import TickIcon from 'svg/landing/tick.svg'

export const Why = () => (
  <VStack py={['2rem', '6rem']}>
    <Heading
      fontSize={['2rem', '3rem']}
      mb={['0', '3rem']}
      textAlign="center"
      fontWeight="semibold"
    >
      Why we're doing this?
    </Heading>
    <VStack w={['100%', '700px']} p={['2rem', '0']} spacing={['2rem', '2.5rem']}>
      <Benefit
        title="Increase Access"
        description="We want the arts to be accessible to all. Through Artsflow we hope to
      increase access to the arts and increase awareness of arts activity locally."
      />
      <Benefit
        title="Empower Creatives"
        description="We want to empower Creatives both experienced and new to the sector, enabling them to share their passion and creativity with others."
      />
      <Benefit
        title="Technology Enabler"
        description="We want to create a 'technology enabler' for the Arts Sector helping people to instantly connect with creative practitioners and arts activities around them."
      />
      <Benefit
        title="Service Discovery"
        description="A world of opportunities and experiences will be opened up for both Creatives & Users. Artsflow will enable Users to discover wonderful arts activities local to them."
      />
    </VStack>
  </VStack>
)

const Benefit = ({ title, description }: any) => (
  <HStack alignItems={['flex-start', 'center']}>
    <Icon as={TickIcon} boxSize={['30px', '40px']} mt={['8px', '0px']} mr="1rem" />
    <Heading as="h3" fontSize={['lg', 'xl']} fontWeight="normal" lineHeight="2rem">
      <b>{title}</b> – {description}
    </Heading>
  </HStack>
)

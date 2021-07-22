import { VStack, Stack, Text, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import ReactPlayer from 'react-player'

import { Meta, Dot, Newsletter } from 'components'
import { trackWebminarPlay, trackWebminarEnd } from 'analytics'
import HeroImg from '../../public/img/hero-cc.webp'

export default function CreativeCorner(): JSX.Element {
  return (
    <>
      <Meta title="Creative Corner" />
      <VStack
        bg="#fef4f4"
        px="2rem"
        textAlign="center"
        spacing="1.5rem"
        pt={['2rem', '5rem']}
        pb={['4rem', '8rem']}
        pos="relative"
      >
        <Dots />
        <Stack
          direction={['column', 'column', 'row']}
          maxW="1000px"
          w="full"
          justifyContent="space-between"
          spacing="2rem"
        >
          <VStack
            maxW={['auto', 'auto', '350px']}
            justifyContent="center"
            textAlign="center"
            spacing="1rem"
            zIndex="2"
          >
            <Heading size="xl" color="#484848">
              Creative Corner
            </Heading>
            <Text color="#616167" maxW="900px" fontSize="xl">
              Find out how to <b>kickstart</b> your Creative Journey and more through our webinar
              series!
            </Text>
          </VStack>
          <Box
            display="grid"
            w="full"
            alignItems="center"
            maxW={['full', '750px']}
            maxH="450px"
            h={['220px', '450px']}
            pos="relative"
          >
            <Image
              src={HeroImg}
              layout="responsive"
              width={718}
              height={423}
              placeholder="blur"
              loading="lazy"
              alt="Creative Corner"
            />
          </Box>
        </Stack>
      </VStack>
      <VStack
        justifyContent="center"
        maxW="1000px"
        px="2rem"
        pt={['2rem', '4rem']}
        pb={['8rem', '12rem']}
        m="auto"
        spacing="8rem"
        pos="relative"
      >
        <Newsletter />
        <Webminar
          url="https://www.youtube.com/watch?v=D6VKhHMXSow"
          title="How To CONNECT With Your Community"
        >
          <Text lineHeight="1.8rem">
            'How to connect with your community' is the 1st Creative Corner webinar in our series
            exploring how you can CONNECT with your community and restart your creative practice. 🙌
          </Text>
          <Text lineHeight="1.8rem">
            <b>In the webinar we cover:</b>
            <br />
            ✔️ How to find & contact various types of client.
            <br />
            ✔️ How to market yourself locally.
            <br />
            ✔️ How to plant those seeds & build lasting relationships.
            <br />
            ✔️ We share our experiences and insights over the last 9 years with Creative Minds.
            <br />
            ✔️ And more!
          </Text>
        </Webminar>
        <Webminar
          url="https://www.youtube.com/watch?v=wvEda8JoaYA"
          title="Branding - How To Get Started?"
        >
          <Text lineHeight="1.8rem">
            'Branding - How to get started?' is the 2nd Creative Corner webinar in our series
            exploring the importance of branding and how to craft your BRAND for your creative
            business. 🙌
          </Text>
          <Text lineHeight="1.8rem">
            <b>In the webinar we cover:</b>
            <br />
            ✔️ What is Branding? - It's more than just a logo!
            <br />
            ✔️ The brand values, brand positioning, fonts, colours and logo.
            <br />
            ✔️ How branding can shape the success of your creative business.
            <br />
            ✔️ What to focus on (depending on what stage you're at in your creative journey).
            <br />
            ✔️ And more!
          </Text>
        </Webminar>
      </VStack>
    </>
  )
}

const Webminar = ({ url, title, children }: any) => {
  const handlePlayVideo = () => {
    trackWebminarPlay({ url, title })
  }

  const handleEndVideo = () => {
    trackWebminarEnd({ url, title })
  }

  return (
    <VStack w="full" maxW="800px" spacing="1rem" alignItems="flex-start">
      <Box w="full" maxW="800px" h={['180px', '450px']} bg="teal.100" pos="relative" mt="-4rem">
        <ReactPlayer
          url={url}
          controls
          width="100%"
          height="100%"
          onPlay={handlePlayVideo}
          onEnded={handleEndVideo}
        />
      </Box>
      <Heading size="lg">{title}</Heading>
      {children}
    </VStack>
  )
}

const Dots = () => (
  <>
    <Dot bg="#3176EE" size="1rem" top={['-40px', '0px']} left={['220px', '400px']} />
    <Dot bg="#F4B7C4" size="40px" top={['-40px', '100px']} left={['280px', '430px']} />
    <Dot bg="#F4B7C4" size="22px" top={['450px', '500px']} left={['140px', '60px']} />
    <Dot border="8px solid #F9D278" top={['420px', '420px']} left={['30px', '380px']} />
    <Dot bg="#F9D278" size="1rem" top={['400px', '520px']} right={['40px', '80px']} />
    <Dot image="cc-dot1" size="56px" left="120px" top="80px" display={['none', 'none', 'block']} />
    <Dot image="cc-dot2" size="60px" left="180px" top="480px" display={['none', 'none', 'block']} />
    <Dot image="cc-dot3" size="46px" top={['420px', '550px']} right={['100px', '360px']} />
  </>
)

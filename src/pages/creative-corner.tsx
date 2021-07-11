import { useState } from 'react'
import { VStack, Stack, Text, Heading, Box, Button, Input, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { useForm } from 'react-hook-form'

import { Meta } from 'components'
import { showAlert } from 'lib/utils'
import CurledArrowSvg from 'svg/landing/curled-arrow.svg'
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
        pt={['40px', '130px']}
        pb={['80px', '130px']}
        pos="relative"
      >
        <Stack
          direction={['column', 'column', 'row']}
          maxW="1200px"
          w="full"
          justifyContent="space-between"
          spacing="2rem"
        >
          <VStack
            maxW={['auto', 'auto', '350px']}
            justifyContent="center"
            textAlign="center"
            spacing="1rem"
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
          <Text>
            'How to connect with your community' is the 1st Creative Corner webinar in our series
            exploring how you can CONNECT with your community and restart your creative practice. 🙌
          </Text>
          <Text>
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
          <Text>
            'Branding - How to get started?' is the 2nd Creative Corner webinar in our series
            exploring the importance of branding and how to craft your BRAND for your creative
            business. 🙌
          </Text>
          <Text>
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
    console.log('handlePlayVideo')
  }

  const handleEndVideo = () => {
    console.log('handleEndVideo')
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

interface Inputs {
  name: string
  email: string
}

const Newsletter = () => {
  const { reset, register, handleSubmit } = useForm<Inputs>()
  const [isLoading, setLoading] = useState(false)

  const onSubmit = async (data: Inputs) => {
    setLoading(true)
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((r) => r.json())
    if (res.ok) {
      showAlert({ title: "You're now In the Flow!", status: 'success' })
      reset()
    } else {
      showAlert({ title: res.error.message })
    }
    setLoading(false)
  }

  return (
    <VStack spacing="1rem" w="full" as="form" onSubmit={handleSubmit(onSubmit)} pos="relative">
      <Icon
        as={CurledArrowSvg}
        w={['80px', '120px']}
        h="90px"
        pos="absolute"
        top={['-80px', '-110px', '-30px']}
        right={['0px', '40px', '80px']}
        transform="rotate(-30deg)"
      />
      <Text fontSize="xl" textAlign="center" maxW="540px">
        Subscribe to our newsletter <b>In the Flow</b> to be notified about our next Creative Corner
        webinar!
      </Text>
      <Stack
        pos="relative"
        bg="#FAFAFA"
        boxShadow="5px 5px 8px rgba(50, 50, 71, 0.1)"
        rounded="8px"
        p="2rem"
        maxW="800px"
        w="full"
        direction={['column', 'row']}
        spacing="1rem"
      >
        <Input
          {...register('email', { required: true })}
          type="email"
          py="1.5rem"
          placeholder="Enter your email address..."
        />
        <Input
          {...register('name', { required: true })}
          type="text"
          py="1.5rem"
          placeholder="Enter your first name..."
        />
        <Button
          type="submit"
          bg="af.teal"
          color="white"
          px="4rem"
          py="1.5rem"
          isLoading={isLoading}
        >
          Sign me up!
        </Button>
      </Stack>
    </VStack>
  )
}

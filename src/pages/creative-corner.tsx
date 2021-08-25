import { VStack, Stack, Text, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { format } from 'date-fns'

import { Meta, Dot, Newsletter } from 'components'
import { getArticlesList } from 'api'
import HeroImg from '../../public/img/hero-cc.webp'

export default function CreativeCorner({ list }: any): JSX.Element {
  return (
    <>
      <Meta title="Creative Corner" />
      <VStack
        bg="#fae9f2"
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
        spacing="4rem"
        pos="relative"
      >
        <Newsletter />
        {list?.articles?.map((article: any) => {
          const { hash, ext, width, height } = article.Image?.[0] || {}
          const date = format(new Date(article.Date), 'dd MMMM, yyyy')
          return (
            <VStack key={article.slug} alignItems="flex-start" w="full">
              <NextLink href={`/cc/${article.slug}`}>
                <a>
                  {hash && (
                    <Box w="full" mb="1.5rem">
                      <Image
                        src={`${hash}/${hash}${ext}`}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN03XPiPwAF4QLKUuLYlwAAAABJRU5ErkJggg=="
                        loading="lazy"
                        alt={article.Title}
                        width={width}
                        height={height}
                        layout="responsive"
                        loader={({ src }) => `https://ik.imagekit.io/artsflow/${src}`}
                      />
                    </Box>
                  )}
                  <Heading size="lg">{article.Title}</Heading>
                  <Text lineHeight="1.8rem" pt="1rem">
                    {article.Description}
                  </Text>
                </a>
              </NextLink>
              <Text color="#A4A4A4" fontSize="sm">
                {article.author?.Name && (
                  <Text as="span">
                    by <b>{article.author?.Name}</b> on{' '}
                  </Text>
                )}
                {date}
                {` `}
                {article.category?.Name && <Text as="span">in {article.category?.Name}</Text>}
              </Text>
            </VStack>
          )
        })}
      </VStack>
    </>
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

export async function getServerSideProps() {
  try {
    const list = await getArticlesList()
    return {
      props: { list },
    }
  } catch (e) {
    return {
      notFound: true,
      props: {},
    }
  }
}

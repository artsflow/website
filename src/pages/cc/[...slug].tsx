import { useEffect } from 'react'
import { VStack, Stack, Text, Heading, Box, HStack, Avatar } from '@chakra-ui/react'
import Image from 'next/image'
import { format } from 'date-fns'

import { Meta, Newsletter } from 'components'
import { trackCreativeCornerArticle } from 'analytics'
import { getArticle } from 'api'
import { ARTSFLOW_URL } from 'lib/config'
import { MDArticle } from 'lib'

export default function Article({ article }: any) {
  const { hash, ext, width, height } = article.Image?.[0] || {}
  const date = format(new Date(article.Date), 'dd MMMM, yyyy')
  const { hash: ahash, ext: aext } = article.author?.Avatar?.[0] || {}

  useEffect(() => {
    trackCreativeCornerArticle(article.Title)
  }, [])

  return (
    <>
      <Meta
        title={article.Title}
        description={article.Description}
        url={`${ARTSFLOW_URL}/cc/${article.slug}`}
        image={loader({ src: `${hash}/${hash}${ext}` })}
        type="article"
        date={article.Date}
        author={article.author?.Name}
      />
      <VStack
        maxW="1000px"
        px="2rem"
        spacing="1.5rem"
        pt={['2rem', '2.5rem']}
        pb={['3rem', '8rem']}
        pos="relative"
        alignItems="flex-start"
        margin="0 auto"
        as="article"
      >
        {hash && (
          <Box w="full">
            <Image
              src={`${hash}/${hash}${ext}`}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN03XPiPwAF4QLKUuLYlwAAAABJRU5ErkJggg=="
              loading="lazy"
              alt={article.Title}
              width={width}
              height={height}
              layout="responsive"
              loader={loader}
            />
          </Box>
        )}
        <Stack spacing={['1rem', '1.5rem']}>
          <Heading size="xl" color="#484848" zIndex="2">
            {article.Title}
          </Heading>
          <HStack spacing="1rem">
            {ahash && (
              <Avatar
                name={article.author?.Name}
                src={loader({ src: `${ahash}/${ahash}${aext}` })}
              />
            )}
            <VStack alignItems="flex-start" spacing="0">
              <Text>{article.author?.Name}</Text>
              <Text color="#A4A4A4">{date}</Text>
            </VStack>
          </HStack>
        </Stack>
        <Box pt={['1rem', '1.5rem']}>{MDArticle(article.Body)}</Box>
        <Newsletter />
      </VStack>
    </>
  )
}

export async function getServerSideProps({ params }: any) {
  const [slug] = params.slug
  const { articles } = await getArticle(slug)
  const [article] = articles

  if (!article) return { notFound: true }

  return {
    props: { article },
  }
}

const loader = ({ src }: any) => `https://ik.imagekit.io/artsflow/${src}`

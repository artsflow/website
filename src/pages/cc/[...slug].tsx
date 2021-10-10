import { useEffect } from 'react'
import { VStack, Stack, Text, Heading, Box, HStack, Avatar } from '@chakra-ui/react'
import Image from 'next/image'
import { format } from 'date-fns'
import toMarkdown from '@sanity/block-content-to-markdown'

import { Meta, Newsletter } from 'components'
import { trackCreativeCornerArticle } from 'analytics'
import { getPostBySlug, urlForSource } from 'api'
import { ARTSFLOW_URL } from 'lib/config'
import { mdserializers } from 'lib/sanity'
import { MDArticle } from 'lib'

const WIDTH = 617
const HEIGHT = 317

export default function Post({ post }: any) {
  const { slug, title, description, author, publishedAt, mainImage, bodyRaw } = post
  const date = format(new Date(publishedAt), 'dd MMMM, yyyy')
  const imgUrl = urlForSource(mainImage.asset._id).size(WIDTH, HEIGHT).url()
  const avatarUrl = urlForSource(author.image.asset._id).url()
  const markdown = toMarkdown(bodyRaw, { serializers: mdserializers })

  useEffect(() => {
    trackCreativeCornerArticle(title)
  }, [])

  return (
    <>
      <Meta
        title={title}
        description={description}
        url={`${ARTSFLOW_URL}/cc/${slug}`}
        image={imgUrl}
        type="article"
        date={publishedAt}
        author={author?.name}
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
        {imgUrl && (
          <Box w="full">
            <Image
              src={imgUrl}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN03XPiPwAF4QLKUuLYlwAAAABJRU5ErkJggg=="
              loading="lazy"
              alt={title}
              width={WIDTH}
              height={HEIGHT}
              layout="responsive"
            />
          </Box>
        )}
        <Stack spacing={['1rem', '1.5rem']}>
          <Heading size="xl" color="#484848" zIndex="2">
            {title}
          </Heading>
          <HStack spacing="1rem">
            {avatarUrl && <Avatar name={author?.name} src={avatarUrl} />}
            <VStack alignItems="flex-start" spacing="0">
              <Text>{author?.name}</Text>
              <Text color="#A4A4A4">{date}</Text>
            </VStack>
          </HStack>
        </Stack>
        <Box pt={['1rem', '1.5rem']}>{MDArticle(markdown)}</Box>
        <Newsletter />
      </VStack>
    </>
  )
}

export async function getServerSideProps({ params }: any) {
  const [slug] = params.slug
  const { allPost } = await getPostBySlug(slug)

  if (!allPost.length) return { notFound: true }

  return {
    props: { post: allPost[0] },
  }
}

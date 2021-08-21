import { request, gql } from 'graphql-request'
import { STRAPI_API_URL } from 'lib/config'
import { format } from 'date-fns'

import { isStaging } from 'lib/utils'

const LIST = gql`
  query($now: String!, $publicationState: PublicationState!) {
    categories {
      Name
      slug
    }
    articles(sort: "Date:DESC", where: { Date_lte: $now }, publicationState: $publicationState) {
      slug
      Date
      category {
        Name
        slug
      }
      Title
      Description
      Image {
        hash
        ext
        width
        height
      }
      author {
        Name
      }
    }
  }
`

export const getArticlesList = async () => {
  const variables = {
    now: format(new Date(), 'yyyy-MM-dd'),
    publicationState: isStaging ? 'PREVIEW' : 'LIVE',
  }
  return request(STRAPI_API_URL, LIST, variables)
}

const ARTICLE = gql`
  query($slug: String!, $publicationState: PublicationState!) {
    articles(where: { slug: $slug }, publicationState: $publicationState) {
      slug
      Date
      category {
        Name
        slug
      }
      Title
      Description
      Body
      Image {
        hash
        ext
        width
        height
      }
      author {
        Name
        Avatar {
          hash
          ext
        }
      }
    }
  }
`

export const getArticle = async (slug: string) => {
  const variables = {
    slug,
    publicationState: isStaging ? 'PREVIEW' : 'LIVE',
  }
  return request(STRAPI_API_URL, ARTICLE, variables)
}

import { request, gql } from 'graphql-request'
import imageUrlBuilder from '@sanity/image-url'

import { SANITY_PROJECT_ID } from 'lib/config'

const config = {
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
}

const API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/production/default`

const builder = imageUrlBuilder(config)

const LIST = gql`
  query {
    allPost {
      title
      description
      slug {
        current
      }
      author {
        name
      }
      categories {
        title
      }
      mainImage {
        asset {
          _id
        }
      }
      publishedAt
    }
  }
`

export const getAllPosts = async () => {
  return request(API_URL, LIST)
}

export const urlForSource = (source: string) => builder.image(source)

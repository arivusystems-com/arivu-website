import { defineLive } from 'next-sanity/live'
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN

export const { sanityFetch, SanityLive } = defineLive({
  client,
  // Viewer token for draft previews and live revalidation. Only exposed to the
  // browser when Draft Mode is active. See README for setup.
  serverToken: token ?? false,
  browserToken: token ?? false,
})

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.string().refine((value) => ['development', 'production'].includes(value), {
      message: "NODE_ENV must be 'development' or 'production'",
    }),
    SPOTIFY_REFRESH_TOKEN: z.string().optional(),
    SPOTIFY_CLIENT_SECRET: z.string().optional(),
    SPOTIFY_CLIENT_ID: z.string().optional(),
    GITHUB_API_TOKEN: z.string().optional(),
    GITHUB_API_URL: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_UMAMI_ID: z.string().optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
    GITHUB_API_URL: process.env.GITHUB_API_URL,

    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_UMAMI_ID: process.env.NEXT_UMAMI_ID,
  }, // Add a comma here
})

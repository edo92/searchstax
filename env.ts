import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SEARCH_URL: z.string(),
    NEXT_PUBLIC_SUGGESTER_URL: z.string(),
    NEXT_PUBLIC_TRACK_API_KEY: z.string(),
    NEXT_PUBLIC_SEARCH_AUTH: z.string(),
    NEXT_PUBLIC_RELATED_SEARCHES_URL: z.string(),
    NEXT_PUBLIC_AUTH_TYPE: z.string(),
    NEXT_PUBLIC_RELATED_SEARCHES_API_KEY: z.string(),
    NEXT_PUBLIC_ANALYTICS_BASE_URL: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SEARCH_URL: process.env.NEXT_PUBLIC_SEARCH_URL,
    NEXT_PUBLIC_SUGGESTER_URL: process.env.NEXT_PUBLIC_SUGGESTER_URL,
    NEXT_PUBLIC_TRACK_API_KEY: process.env.NEXT_PUBLIC_TRACK_API_KEY,
    NEXT_PUBLIC_SEARCH_AUTH: process.env.NEXT_PUBLIC_SEARCH_AUTH,
    NEXT_PUBLIC_ANALYTICS_BASE_URL: process.env.NEXT_PUBLIC_ANALYTICS_BASE_URL,
    NEXT_PUBLIC_RELATED_SEARCHES_URL:
      process.env.NEXT_PUBLIC_RELATED_SEARCHES_URL,
    NEXT_PUBLIC_AUTH_TYPE: process.env.NEXT_PUBLIC_AUTH_TYPE,
    NEXT_PUBLIC_RELATED_SEARCHES_API_KEY:
      process.env.NEXT_PUBLIC_RELATED_SEARCHES_API_KEY,
  },
});

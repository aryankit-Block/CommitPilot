export const config = {
  github: {
    clientId: process.env.GITHUB_ID || '',
    clientSecret: process.env.GITHUB_SECRET || '',
  },
  nextAuth: {
    secret: process.env.NEXTAUTH_SECRET || '',
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  },
  api: {
    url: process.env.API_URL || 'http://localhost:3000/api',
    key: process.env.API_KEY || '',
  },
  database: {
    url: process.env.DATABASE_URL || '',
  },
  redis: {
    url: process.env.REDIS_URL || '',
  },
  rateLimit: {
    window: parseInt(process.env.RATE_LIMIT_WINDOW || '15', 10),
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
  },
} as const;

export type Config = typeof config; 


const env = process.env.NODE_ENV || 'development'
const config = {
  env,
  isDev: env === 'development',
  isBrowser: typeof window !== 'undefined',
  apiUrl: 'http://localhost:8000',
}

module.exports = config

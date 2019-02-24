

const env = process.env.NODE_ENV || 'development'
const config = {
  env,
  isDev: env === 'development',
  isBrowser: typeof window !== 'undefined',
  apiUrl: 'http://192.168.8.122:8000', //acording to your local IP address
}

module.exports = config

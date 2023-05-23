const { DB_USERNAME = '', DB_PASSWORD = '', DB_HOST = '' } = process.env

if ([DB_USERNAME, DB_PASSWORD, DB_HOST].some(data => data === '')) {
  throw new Error('ENV: MongoDB environment variables are not set')
}

const config = {
  url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`
}

export default config

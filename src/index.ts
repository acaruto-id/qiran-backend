import mongoose from 'mongoose'
import { v2 as cloudinary } from 'cloudinary'
import { dbConfig, serverConfig, storageConfig } from './config'
import app from './app'

cloudinary.config(storageConfig)

cloudinary.api
  .ping()
  .then(() => {
    console.log('🌩️  Connected to Cloudinary')
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log('🍃 Connected to MongoDB')
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

app
  .listen(serverConfig.port, () => {
    console.log(`🚀 Server running on port ${serverConfig.port}`)
  })
  .on('error', error => {
    console.error(error)
    process.exit(1)
  })

import compression from 'compression'
import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from 'helmet'
import routes from './routes'
import { errorHandler, notFoundHandler } from './utils/customHandler'

const app = express()

// security HTTP headers
app.use(helmet())

// parse JSON request body
app.use(express.json())

// parse URL-encoded request body
app.use(express.urlencoded({ extended: true }))

// sanitize request data
app.use(mongoSanitize())

// gzip compression
app.use(compression())

// enable cors
app.use(cors())
app.options('*', cors())

// enable files upload
app.use(fileUpload({ createParentPath: true }))

// v1 api routes
app.use('/v1', routes)

// handle error
app.use(notFoundHandler)
app.use(errorHandler)

export default app

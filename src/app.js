/* eslint-disable brace-style */
import './util/initEnv'

import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import expressip from 'express-ip'
import indexRoutes from './routes'
import flag from '../src/util/flag/errorCode'
import './models'
import * as Sentry from '@sentry/node'
import response from './util/response/response'
import { debugError, debugRedis } from './util/debug'
const app = express()

app.use(expressip().getIpInfoMiddleware)

/**
 * Integrate to Sentry
 * Sentry realtime error tracking
 * @public
 */
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_DNS
  })
  app.use(Sentry.Handlers.requestHandler())
} else {
  app.use(logger('dev'))
}

/**
 * Protect app from some well-known web
 * vulnerabilities by setting HTTP headers appropriately.
 * @public
 */
app.use(cors())
app.use(helmet())
app.disable('x-powered-by')
app.disable('etag')

/**
 * Define Parser
 * Json Body parser
 * @public
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes)

/**
 * Handle error
 * basic error handling
 * @public
 */
// app.use(Sentry.Handlers.errorHandler())
app.use('*', (req, res, next) => {
  response.invalidInput('Route Not Found', res, flag.request.invalid_routes)
})
app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    response.invalidInput(err.error.message, res, err.error.name)
  } else {
    const resFn = err.resFn || response.error
    const resFlag = err.flag || flag.internal_server_error
    if (err) resFn(err.message || 'Internal Server Error', res, resFlag)
  }
})
// app.use(errorhandler)

process.on('unhandledRejection', (err) => {
  debugError(err.message)
})

export default app

/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-process-exit */
require('dotenv').config()

const express = require('express')
const { createHttpTerminator } = require('http-terminator')

const { keystone, apps } = require('./index.js')
const seedItems = require('./data/seeds')

function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val // named pipe
  if (port >= 0) return port // port number
  return false
}

function logSucessMessage(port) {
  console.info(
    `
  =======================================================
  Slatam API listening on ${port}.                        
                                                          
  Admin UI:           http://api.vcap.me                     
  GraphQL Playground: http://api.vcap.me/admin/graphiql       
  =======================================================

  `
  )
}

const port = normalizePort(process.env.PORT || '4300')
const isDev = process.env.NODE_ENV !== 'production'

let isDBConnected = false
let server
let httpTerminator

keystone
  .prepare({
    apps,
    dev: isDev,
  })
  .then(async ({ middlewares }) => {
    await keystone.connect()
    const app = express()

    console.info('Connected to the database.')
    isDBConnected = true

    await seedItems(keystone)

    app.use(middlewares)
    app.set('trust proxy', true)

    server = app.listen(port, (error) => {
      if (error) throw error
      if (isDev) {
        const address = server.address()
        const bind =
          typeof address === 'string'
            ? `pipe ${address}`
            : `port ${address.port}`

        logSucessMessage(bind)
      }
    })

    httpTerminator = createHttpTerminator({
      server,
    })
  })
  .catch((error) => {
    console.error('Found errors trying to start the web server')
    console.error(error)
    process.exit(1)
  })

/* #################################################### */

/**
 * Function definitions
 * */

async function shutdown() {
  console.info('Starting graceful shutdown...')

  console.info('Closing connections on server...')
  await httpTerminator.terminate()
  console.info('Connections closed!')

  console.info('Disconnecting from database...')

  isDBConnected = false
  keystone.disconnect()

  console.info('Database connection closed.')

  console.info('Successful graceful shutdown.')
  process.exit()
}

// Quit properly on ctrl+c
process.on('SIGINT', function onSigint() {
  console.info(
    'Got SIGINT (aka ctrl-c in docker). Graceful shutdown ',
    new Date().toISOString()
  )
  shutdown()
})

// Quit properly on docker stop
process.on('SIGTERM', function onSigterm() {
  console.info(
    'Got SIGTERM (docker container stop). Graceful shutdown ',
    new Date().toISOString()
  )
  shutdown()
})

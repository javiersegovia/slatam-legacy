/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-process-exit */
require('dotenv').config()

const express = require('express')
const { createHttpTerminator } = require('http-terminator')
const { Keystone } = require('@keystonejs/keystone')
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { KnexAdapter } = require('@keystonejs/adapter-knex')

const models = require('./models')
const seedItems = require('./data/seeds')
const { userIsAdmin } = require('./lib/access-control')

function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val // named pipe
  if (port >= 0) return port // port number
  return false
}

const app = express()
const port = normalizePort(process.env.PORT || '4300')
const isDev = process.env.NODE_ENV !== 'production'

let dbConnected = false
let server
let httpTerminator

const keystone = new Keystone({
  name: 'Slatam API',
  adapter: new KnexAdapter({ dropDatabase: true }),
  cookieSecret: process.env.API_COOKIE_SECRET || 'default',
  onConnect: async (ks) => {
    if (isDev) {
      seedItems(ks)
    }
  },
})

/**
 * Create the database models
 */

if (models && models.length) {
  models.forEach(([modelName, modelContent]) => {
    keystone.createList(modelName, modelContent)
  })
}

// [TODO]
// 1. add auth system and sessions to express (Redis?)
// 2. add logger (Pino? Errors to Sentry?)
// 3. healthchecks
// 4. add simple seeding for the first admin user

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})

const admin = new AdminUIApp({
  name: 'Slatam API',
  enableDefaultRoute: true,
  authStrategy,
  isAccessAllowed: userIsAdmin,
})

keystone
  .prepare({
    apps: [admin, new GraphQLApp()],
    dev: isDev,
    onConnect: () => {
      // executed when the connection to the DB is successful
      console.info('Connected to the database.')
      dbConnected = true
    },
  })
  .then(async ({ middlewares }) => {
    // Connect keystone to the database and
    // add keystone app middlewares to the express server
    await keystone.connect()
    app.use(middlewares)
    app.set('trust proxy', true)
  })
  .then(() => {
    server = app.listen(port, () => {
      if (isDev) {
        const address = server.address()
        const bind =
          typeof address === 'string'
            ? `pipe ${address}`
            : `port ${address.port}`

        console.log(
          `
  =======================================================
      Slatam API listening on ${bind}.                        
                                                              
      Admin UI:           http://api.vcap.me                     
      GraphQL Playground: http://api.vcap.me/admin/graphiql       
  =======================================================
  
  `
        )
      }
    })

    httpTerminator = createHttpTerminator({
      server,
    })
  })

/* #################################################### */

/**
 * Function definitions
 * */

async function shutdown() {
  console.info('Starting graceful shutdown...')
  console.info('Closing connections on server...')
  await httpTerminator.terminate() // This will close all the current connections
  console.info('Connections closed!')
  console.info('Disconnecting from database...')
  dbConnected = false
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

module.exports = {
  keystone,
  admin,
}

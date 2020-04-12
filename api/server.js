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
const { userIsAdmin } = require('./lib/access-control')

function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val // named pipe
  if (port >= 0) return port // port number
  return false
}

const app = express()
const port = normalizePort(process.env.PORT || '4300')

let dbConnected = false
let server
let httpTerminator

const keystone = new Keystone({
  name: 'Slatam API',
  adapter: new KnexAdapter({ dropDatabase: true }),
})

/**
 * Create the database models
 */

if (models && models.length) {
  models.forEach(([modelName, modelContent]) => {
    keystone.createList(modelName, modelContent)
  })
}

// TODO: ADD auth system and sessions to express
// TODO: ADD logger
// TODO: ADD healthchecks
// TODO: ADD simple seeding for the first admin user

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})

keystone
  .prepare({
    apps: [
      new GraphQLApp(),
      new AdminUIApp({
        enableDefaultRoute: true,
        // authStrategy,
        // Only allow admin to access the UI:
        // isAccessAllowed: userIsAdmin,
      }),
    ],
    dev: process.env.NODE_ENV !== 'production',
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
  })
  .then(() => {
    server = app.listen(port, () => {
      const address = server.address()
      const bind =
        typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`
      console.log(`Keystone custom app listening on ${bind}!`)
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
}

require('dotenv').config()

const { Keystone } = require('@keystonejs/keystone')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { KnexAdapter } = require('@keystonejs/adapter-knex')
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')

const models = require('./models')
const { userIsAdmin } = require('./lib/access-control')

const keystone = new Keystone({
  name: 'Slatam API',
  adapter: new KnexAdapter({ dropDatabase: true }),
  cookieSecret: process.env.API_COOKIE_SECRET || 'default',
})

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

const adminApp = new AdminUIApp({
  authStrategy,
  name: 'Slatam API',
  enableDefaultRoute: true,
  isAccessAllowed: userIsAdmin,
})

const gqlApp = new GraphQLApp()

const apps = [adminApp, gqlApp]

module.exports = {
  keystone,
  apps,
}

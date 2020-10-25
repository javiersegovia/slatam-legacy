require('dotenv').config()

const { Keystone } = require('@keystonejs/keystone')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { KnexAdapter } = require('@keystonejs/adapter-knex')
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')

const models = require('./models')
const seedItems = require('./data/seeds')
const { userIsAdmin } = require('./lib/access-control')

const keystone = new Keystone({
  name: 'Slatam API',
  adapter: new KnexAdapter({ dropDatabase: true }),
  cookieSecret: process.env.API_COOKIE_SECRET || 'default',
  onConnect: async (ks) => {
    // Seed the DB
    await seedItems(ks)
  },
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

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})

const gqlApp = new GraphQLApp()

const adminApp = new AdminUIApp({
  authStrategy,
  name: 'Slatam API',
  enableDefaultRoute: true,
  // isAccessAllowed: userIsAdmin,
})

const apps = [gqlApp, adminApp]

module.exports = {
  keystone,
  apps,
}

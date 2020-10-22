require('dotenv').config()

const { Keystone } = require('@keystonejs/keystone')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { KnexAdapter } = require('@keystonejs/adapter-knex')
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')

const models = require('./models')
const seedItems = require('./data/seeds')
const { userIsAdmin } = require('./lib/access-control')
const { createItems } = require('@keystonejs/server-side-graphql-client')

const keystone = new Keystone({
  name: 'Slatam API',
  adapter: new KnexAdapter({ dropDatabase: true }),
  cookieSecret: process.env.API_COOKIE_SECRET || 'default',
  onConnect: async (keystone) => {
    await createItems({
      keystone,
      listKey: 'User',
      items: [
        {
          data: {
            firstName: 'John Duck',
            email: 'john@duck.com',
            password: 'dolphins',
          },
        },
        {
          data: {
            firstName: 'Barry',
            email: 'bartduisters@bartduisters.com',
            password: 'dolphins',
          },
        },
      ],
    })
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
// 4. add simple seeding for the first admin user

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})

const graphQlApp = new GraphQLApp()

const adminApp = new AdminUIApp({
  name: 'Slatam API',
  enableDefaultRoute: true,
  // authStrategy,
  // isAccessAllowed: userIsAdmin,
})

const apps = [graphQlApp, adminApp]

module.exports = {
  keystone,
  apps,
}

// This script will check if the User table is empty and if
// required seed the table with an initial Admin user.

require('dotenv').config()

const { GraphQLApp } = require('@keystonejs/app-graphql')
const { keystone } = require('../../server')

// eslint-disable-next-line import/prefer-default-export
async function seed(knex) {
  // Connect to the database and initialise tables for new lists.
  console.log('running knex')
  // console.log(keystone)

  // Unlike Migrations, Knex does not keep track of which
  // seed files have been run. Since we run this on start, we
  // need to check the table is empty before adding data.
  const rows = await knex('User').select('id')
  if (rows.length === 0) {
    // Start an instance of Keystone with a GraphQLApp so we can execute queries
    console.log('prepare keystone knex')
    // await keystone.prepare({
    //   apps: [new GraphQLApp()],
    //   distDir: 'dist',
    //   dev: true,
    // })

    // Lets not hardcode a password
    const email = process.env.ADMIN_EMAIL
    const password = process.env.ADMIN_PASSWORD

    // To create users we are using Keystone's executeQuery method
    // rather than knex("User").insert([]) to ensure passwords are
    // correctly hashed and hooks are executed.

    await keystone.executeQuery(
      `mutation initialUser($password: String, $email: String) {
            createUser(data: {
              email: $email, 
              password: $password, 
              permission: ADMIN
            }) {
              id
            }
          }`,
      {
        variables: {
          password,
          email,
        },
      }
    )

    const rows2 = await knex('User').select('id')

    console.log('new user')
    console.log(rows2)

    await keystone.disconnect()
    return true
  }
  // eslint-disable-next-line no-console
  console.log('Database already seeded.')
  await keystone.disconnect()
  return false
}

module.exports = {
  seed,
}

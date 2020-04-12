// This file is not used by Keystone but is required for migrations.
// See: http://knexjs.org/#knexfile
require('dotenv').config()

const connectionString =
  process.env.DATABASE_URL ||
  process.env.CONNECT_TO ||
  process.env.POSTGRES_DB ||
  process.env.KNEX_URI

module.exports = {
  client: 'postgres',
  connection: connectionString,
  seeds: {
    directory: './data/seeds',
  },
  migrations: {
    directory: './data/migrations',
  },
}

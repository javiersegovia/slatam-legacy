const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdmin } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDocs: 'The name of the state',
      type: Text,
      isRequired: true,
      access: {
        read: true,
        update: userIsAdmin,
        delete: userIsAdmin,
      },
    },
    cities: {
      schemaDocs: 'The cities that belongs to the state',
      type: Relationship,
      ref: 'City.state',
      many: true,
      access: {
        read: true,
        update: userIsAdmin,
        delete: userIsAdmin,
      },
    },
    country: {
      schemaDocs: 'The country that the state belongs',
      type: Relationship,
      ref: 'Country.states',
      access: {
        read: true,
        update: userIsAdmin,
        delete: userIsAdmin,
      },
    },
  },
  access: {
    read: true,
    update: userIsAdmin,
    delete: userIsAdmin,
  },
  plugins: [atTracking(), byTracking()],
}

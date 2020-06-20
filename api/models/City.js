const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdmin } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDocs: 'The name of the city',
      type: Text,
      isRequired: true,
      access: {
        read: true,
        update: userIsAdmin,
        delete: userIsAdmin,
      },
    },
    state: {
      schemaDocs: 'The name of the state that the city belongs',
      type: Relationship,
      ref: 'State.cities',
      isRequired: true,
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

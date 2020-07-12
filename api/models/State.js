const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDoc: 'The name of the state',
      type: Text,
      isRequired: true,
    },
    country: {
      schemaDoc: 'The country that the state belongs',
      type: Relationship,
      ref: 'Country.states',
    },
  },
  access: {
    read: true,
    create: userIsAdminOrMod,
    update: userIsAdminOrMod,
    delete: userIsAdminOrMod,
  },
  plugins: [atTracking(), byTracking()],
}

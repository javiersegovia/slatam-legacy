const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDoc: 'The name of the region',
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    subregions: {
      schemaDoc: 'The subregions that the region has',
      type: Relationship,
      ref: 'Subregion.region',
      isRequired: true,
      many: true,
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

const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDoc: 'The name of the subregion',
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    region: {
      schemaDoc: 'The region who the subregion belongs',
      type: Relationship,
      ref: 'Region.subregions',
    },
    countries: {
      schemaDoc: 'The countries that has the subregion',
      type: Relationship,
      ref: 'Country.subregion',
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

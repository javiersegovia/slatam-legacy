const { Text, Url } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDocs: 'The name of the language',
      type: Text,
      isRequired: true,
    },
    flag: {
      schemaDocs: 'The flag that represents the language',
      type: Url,
      isRequired: true,
    },
    iso639_1: {
      schemaDocs: 'The acronym of the language',
      type: Text,
      isRequired: true,
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

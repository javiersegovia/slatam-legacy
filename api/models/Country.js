const { Text, Relationship, Url } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrMod } = require('../lib/access-control')
// const validator = require('validator')

module.exports = {
  fields: {
    name: {
      schemaDoc: 'The name of the country',
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    flag: {
      schemaDoc: 'The flag url of the country',
      type: Url,
      isUnique: true,
      isRequired: true,
    },
    capital: {
      schemaDoc: 'The capital of the country',
      type: Text,
      isRequired: true,
    },
    subregion: {
      schemaDoc: 'The subregion of the country',
      type: Relationship,
      ref: 'Subregion.countries',
      isRequired: true,
    },
    states: {
      schemaDoc: 'The states of the country',
      type: Relationship,
      ref: 'State.country',
      many: true,
      isRequired: true,
    },
    code2: {
      schemaDoc: 'The acronym of the country',
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    phoneCode: {
      schemaDoc: 'The phone code of the country',
      type: Text,
      isUnique: true,
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

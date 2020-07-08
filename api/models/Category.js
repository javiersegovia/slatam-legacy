const { Text, Checkbox, Integer, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDocs: 'The category name',
      type: Text,
      isRequired: true,
    },
    subcategories: {
      schemaDocs: 'The subcategories that the category have',
      type: Relationship,
    },
  },
}

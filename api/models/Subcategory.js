const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDocs: 'The subcategory name',
      type: Text,
      isRequired: true,
    },
    category: {
      schemaDocs: 'The category that the subcategory belongs',
      type: Relationship,
      ref: 'Category',
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

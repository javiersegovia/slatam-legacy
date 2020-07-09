const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
// const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  schemaDoc: 'Post data',
  fields: {
    title: {
      schemaDoc: 'The title of this product detail',
      type: Text,
    },
    content: {
      schemaDoc: 'The content of this product detail',
      type: Text,
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The product that belongs this info',
      type: Relationship,
      ref: 'Product.quickDetails',
      isRequired: true,
    },
  },
  access: {
    read: true,
    // create: userIsMod,
  },
  plugins: [atTracking(), byTracking()],
}

const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    addressLine1: {
      schemaDoc: "The first line of the product location's address",
      type: Text,
      isRequired: true,
    },
    addressLine2: {
      schemaDoc: "The second line of the product location's address",
      type: Text,
    },
    city: {
      schemaDoc: 'The city where the product is',
      type: Text,
      isRequired: true,
    },
    state: {
      schemaDoc: 'the state where the product is',
      type: Relationship,
      ref: 'State',
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The product logistics that this info belongs',
      type: Relationship,
      ref: 'ProductLogistic.location',
    },
  },
  plugins: [atTracking(), byTracking()],
}

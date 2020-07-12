const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    addressLine1: {
      schemaDoc: "The first line of the company location's address",
      type: Text,
      isRequired: true,
    },
    addressLine2: {
      schemaDoc: "The second line of the company location's address",
      type: Text,
    },
    city: {
      schemaDoc: 'The city where the company is',
      type: Text,
      isRequired: true,
    },
    state: {
      schemaDoc: 'the state where the company is',
      type: Relationship,
      ref: 'State',
    },
    belongsTo: {
      schemaDoc: 'The company info table that this info belongs',
      type: Relationship,
      ref: 'CompanyInfo.location',
    },
  },
  plugins: [atTracking(), byTracking()],
}

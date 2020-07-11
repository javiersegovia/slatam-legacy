const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    addressLine1: {
      schemaDoc: "The first line of the user location's address",
      type: Text,
      isRequired: true,
    },
    addressLine2: {
      schemaDoc: "The second line of the user location's address",
      type: Text,
    },
    city: {
      schemaDoc: 'The city where the user is',
      type: Text,
      isRequired: true,
    },
    state: {
      schemaDoc: 'the state where the user is',
      type: Relationship,
      ref: 'State',
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The user info table that this info belongs',
      type: Relationship,
      ref: 'UserInfo.location',
    },
  },
  plugins: [atTracking(), byTracking()],
}

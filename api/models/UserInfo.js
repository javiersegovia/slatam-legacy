const { Text, Relationship } = require('@keystonejs/fields')
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    location: {
      schemaDoc: 'The location of the user',
      type: Relationship,
      ref: 'UserLocation.belongsTo',
      isRequired: true,
    },
    birthDate: {
      schemaDoc: 'The birthDate of the user',
      type: DateTimeUtc,
    },
    phone: {
      schemaDoc: 'The phone number of the user',
      type: Text,
    },
    postalCode: {
      schemaDoc: 'The postal code of the user',
      type: Text,
    },
    languages: {
      schemaDoc: 'The languages that the user speak',
      type: Relationship,
      ref: 'Language',
      many: true,
    },
    belongsTo: {
      schemaDoc: 'The user that belongs this info',
      type: Relationship,
      ref: 'User.info',
    },
  },
  plugins: [atTracking(), byTracking()],
}

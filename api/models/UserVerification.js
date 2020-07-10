const { Text, Relationship, Checkbox } = require('@keystonejs/fields')
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrOwner, userIsAdmin } = require('../lib/access-control')

module.exports = {
  fields: {
    resetToken: {
      schemaDoc: "The password's reset token",
      type: Text,
      isUnique: true,
    },
    resetTokenExpiry: {
      schemaDoc: "The password's reset expiry date",
      type: DateTimeUtc,
      isUnique: true,
    },
    verifiedEmail: {
      schemaDoc: 'The account verification state',
      type: Checkbox,
      isRequired: true,
    },
    verifiedEmailToken: {
      type: Text,
      isUnique: true,
    },
    verifiedEmailTokenExpiry: {
      schemaDoc: 'The account verification expiry date',
      type: DateTimeUtc,
      isUnique: true,
    },
    belongsTo: {
      schemaDoc: 'The user who belongs this info',
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    plugins: [atTracking(), byTracking()],
  },
}

const { Text, Relationship, Checkbox } = require('@keystonejs/fields')
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    passwordResetToken: {
      schemaDoc: "The password's reset token",
      type: Text,
      isUnique: true,
    },
    passwordResetTokenExpiryDate: {
      schemaDoc: "The password's reset expiry date",
      type: DateTimeUtc,
      isUnique: true,
    },
    isVerifiedEmail: {
      schemaDoc: 'The account verification state',
      type: Checkbox,
      isRequired: true,
    },
    verifiedEmailToken: {
      type: Text,
      isUnique: true,
    },
    verifiedEmailTokenExpiryDate: {
      schemaDoc: 'The account verification expiry date',
      type: DateTimeUtc,
      isUnique: true,
    },
    belongsTo: {
      schemaDoc: 'The user who belongs this info',
      type: Relationship,
      ref: 'User.verification',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

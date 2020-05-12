const { Text, Select, Password } = require('@keystonejs/fields')
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdminOrOwner, userIsAdmin } = require('../lib/access-control')

module.exports = {
  fields: {
    firstName: { type: Text },
    lastName: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    password: {
      type: Password,
      isRequired: true,
      access: {
        read: userIsAdmin,
        update: userIsAdminOrOwner,
      },
    },
    permission: {
      type: Select,
      defaultValue: 'USER',
      options: ['ADMIN', 'EDITOR', 'USER'],
    },
    resetToken: { type: Text, unique: true },
    resetTokenExpiry: { type: DateTimeUtc, unique: true },
  },
  access: {
    // create: true,
    // read: userIsAdminOrOwner,
    // update: userIsAdminOrOwner,
    // delete: userIsAdmin,
    auth: true,
  },
  plugins: [atTracking(), byTracking()],
}

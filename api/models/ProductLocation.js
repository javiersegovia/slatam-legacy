const { Text, Relationship, Select, Checkbox } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsCompanyMember, user } = require('../lib/access-control')

module.exports = {
  fields: {
    addressLine1: {
      schemaDoc: "The first line of the product location's address",
      type: Text,
      isRequired: true,
      access: {
        read: true,
        // create:
        update: userIsCompanyMember,
        delete: false,
      },
    },
    addressLine2: {
      schemaDoc: "The second line of the product location's address",
      type: Text,
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
  // access: {
  //   create: userIsAuthenticated,
  //   read: true,
  //   delete: userIsAdminOrMod,
  // },
  plugins: [atTracking(), byTracking()],
}

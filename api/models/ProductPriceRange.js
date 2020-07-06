const { Integer, Relationship } = require('@keystonejs/fields')
const {
  userIsProductOwner,
  userIsAdminOrMod,
} = require('../lib/access-control')
const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    product: {
      type: Relationship,
      ref: 'Product.priceRanges',
      isRequired: true,
      access: {
        update: (payload) => userIsAdminOrMod(payload),
      },
    },
    value: {
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    minRange: {
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    maxRange: {
      // TODO: add hook to validate max and min range
      type: Integer,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
  },
  access: {
    // only create if the person is product owner
    read: true,
    // delete: userIsModOrOwner, // validate that it is not the last item
  },
}

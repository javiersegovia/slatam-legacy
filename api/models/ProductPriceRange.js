const { Integer, Relationship, Float } = require('@keystonejs/fields')
const {
  userIsProductOwner,
  userIsAdminOrMod,
} = require('../lib/access-control')

module.exports = {
  fields: {
    value: {
      type: Float,
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
    belongsTo: {
      type: Relationship,
      ref: 'Product.priceRanges',
      access: {
        update: (payload) => userIsAdminOrMod(payload),
      },
    },
  },
  access: {
    // only create if the person is product owner
    read: true,
    // delete: userIsModOrOwner, // validate that it is not the last item
  },
}

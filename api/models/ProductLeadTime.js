const { Integer, Relationship } = require('@keystonejs/fields')
const {
  userIsProductOwner,
  userIsAdminOrMod,
} = require('../lib/access-control')

module.exports = {
  fields: {
    minQuantity: {
      type: Integer,
      isRequired: true,
    },
    maxQuantity: {
      type: Integer,
      isRequired: true,
    },
    deliveryDays: {
      type: Integer,
      isRequired: true,
    },
    belongsTo: {
      type: Relationship,
      ref: 'ProductLogistic.leadTime',
      isRequired: true,
    },
  },
  access: {
    // only create if the person is product owner
    read: true,
    // delete: userIsModOrOwner, // validate that it is not the last item
  },
}

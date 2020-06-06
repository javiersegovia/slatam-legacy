const { Integer, Float, Relationship } = require('@keystonejs/fields')
const { userIsModOrOwner } = require('../lib/access-control')

module.exports = {
  fields: {
    product: { type: Relationship, ref: 'Product', isRequired: true },
    average: {
      type: Float,
      isRequired: true,
      defaultValue: 0,
    },
    reviewsCount: {
      type: Integer,
      isRequired: true,
      defaultValue: 0,
    },
    reviews: {
      // TODO: add hook to validate max and min range
      type: Relationship,
      ref: 'ProductReview',
      many: true,
    },
  },
  access: {
    create: true, // TODO: Check that only product owner or manager can create/edit the product price
    read: true,
    update: userIsModOrOwner,
    delete: userIsModOrOwner, // validate that it is not the last item
  },
}

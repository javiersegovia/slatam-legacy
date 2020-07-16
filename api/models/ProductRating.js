const { Integer, Float, Relationship } = require('@keystonejs/fields')
const { userIsAdminOrMod } = require('../lib/access-control')

module.exports = {
  fields: {
    average: {
      schemaDoc: 'The average rating of the product',
      type: Float,
      defaultValue: 0,
      isRequired: true,
    },
    reviewsCount: {
      schemaDoc: 'The number of reviews of the product',
      type: Integer,
      defaultValue: 0,
      isRequired: true,
    },
    reviews: {
      // TODO: add hook to validate max and min range
      schemaDoc: 'The reviews that the product has',
      type: Relationship,
      ref: 'ProductReview.belongsTo',
      many: true,
    },
    belongsTo: {
      schemaDoc: 'The product that belongs this info',
      type: Relationship,
      ref: 'Product.rating',
    },
  },
  access: {
    read: true,
    create: userIsAdminOrMod,
    update: userIsAdminOrMod,
    delete: userIsAdminOrMod,
  },
}

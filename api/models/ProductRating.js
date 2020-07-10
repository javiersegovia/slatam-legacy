const { Integer, Float, Relationship } = require('@keystonejs/fields')

module.exports = {
  fields: {
    average: {
      schemaDoc: 'The average rating of the product',
      type: Float,
      isRequired: true,
      defaultValue: 0,
    },
    reviewsCount: {
      schemaDoc: 'The number of reviews of the product',
      type: Integer,
      isRequired: true,
      defaultValue: 0,
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
      isRequired: true,
    },
  },
}

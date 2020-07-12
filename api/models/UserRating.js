const { Float, Relationship, Integer } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    buyerRating: {
      schemaDoc: 'The buyer rating of the user',
      type: Float,
      defaultValue: 0,
      isRequired: true,
    },
    buyerReviewsCount: {
      schemaDoc: 'The buyer review count',
      type: Integer,
      defaultValue: 0,
      isRequired: true,
    },
    buyerReviews: {
      schemaDoc: 'The buyer reviews of the user',
      type: Relationship,
      ref: 'BuyerReview.belongsToUser',
      many: true,
    },
    belongsTo: {
      schemaDoc: 'The user who belongs this info',
      type: Relationship,
      ref: 'User.rating',
    },
  },
  plugins: [atTracking(), byTracking()],
}

const { Float, Relationship, Integer } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    sellerRating: {
      schemaDoc: 'The buyer rating of the company',
      type: Float,
      isRequired: true,
    },
    buyerRating: {
      schemaDoc: 'The seller rating of the company',
      type: Float,
      isRequired: true,
    },
    avgRating: {
      schemaDoc: 'The average rating of the company',
      type: Float,
      isRequired: true,
    },
    buyerReviewsCount: {
      schemaDoc: 'The buyer review count',
      type: Integer,
      defaultValue: 0,
      isRequired: true,
    },
    buyerReviews: {
      schemaDoc: 'The buyer reviews of the company',
      type: Relationship,
      ref: 'BuyerReview.belongsToCompany',
      many: true,
    },
    sellerReviewsCount: {
      schemaDoc: 'The seller review count',
      type: Integer,
      defaultValue: 0,
      isRequired: true,
    },
    sellerReviews: {
      schemaDoc: 'The buyer reviews of the company',
      type: Relationship,
      ref: 'SellerReview.belongsTo',
      many: true,
    },
    belongsTo: {
      schemaDoc: 'The company who belongs this info',
      type: Relationship,
      ref: 'Company.rating',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

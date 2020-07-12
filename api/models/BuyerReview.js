const { Relationship, Float } = require('@keystonejs/fields')
const { Markdown } = require('@keystonejs/fields-markdown')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    author: {
      schemaDoc: 'The user who wrote the review',
      type: Relationship,
      ref: 'User',
    },
    authorAssociatedCompany: {
      schemaDoc: 'The company of the user',
      type: Relationship,
      ref: 'Company',
    },
    rating: {
      schemaDoc: 'The rating of the review',
      type: Float,
    },
    comment: {
      schemaDoc: 'The review itself',
      type: Markdown,
      isRequired: true,
    },
    belongsToUser: {
      schemaDoc: 'The user who belongs the review',
      type: Relationship,
      ref: 'UserRating.buyerReviews',
    },
    belongsToCompany: {
      schemaDoc: 'The company who belongs the review',
      type: Relationship,
      ref: 'CompanyRating.buyerReviews',
    },
  },
  plugins: [atTracking(), byTracking()],
}

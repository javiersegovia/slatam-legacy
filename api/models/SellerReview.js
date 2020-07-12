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
      isRequired: true,
    },
    comment: {
      schemaDoc: 'The review itself',
      type: Markdown,
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The company who belongs the review',
      type: Relationship,
      ref: 'CompanyRating.sellerReviews',
    },
  },
  plugins: [atTracking(), byTracking()],
}

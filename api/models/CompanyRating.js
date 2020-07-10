const { Float, Relationship } = require('@keystonejs/fields')
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
    belongsTo: {
      schemaDoc: 'The company who belongs this info',
      type: Relationship,
      ref: 'Company.rating',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

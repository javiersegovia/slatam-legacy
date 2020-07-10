const { Float, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    buyerRating: {
      schemaDoc: 'The buyer rating of the user',
      type: Float,
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The user who belongs this info',
      type: Relationship,
      ref: 'User.rating',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

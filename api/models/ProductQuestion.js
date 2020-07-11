const { Relationship } = require('@keystonejs/fields')
const { Markdown } = require('@keystonejs/fields-markdown')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    author: {
      schemaDoc: 'The user who wrote the question',
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    authorAssociatedCompany: {
      schemaDoc: 'The company of the user',
      type: Relationship,
      ref: 'Company',
    },
    description: {
      schemaDoc: 'The question itself',
      type: Markdown,
      isRequired: true,
    },
    answer: {
      schemaDoc: 'The answer of the question',
      type: Relationship,
      ref: 'ProductAnswer.belongsTo',
    },
    belongsTo: {
      schemaDoc: 'The product who belongs this question',
      type: Relationship,
      ref: 'Product.questions',
    },
  },
  plugins: [atTracking(), byTracking()],
}

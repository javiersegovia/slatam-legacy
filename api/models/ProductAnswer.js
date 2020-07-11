const { Relationship } = require('@keystonejs/fields')
const { Markdown } = require('@keystonejs/fields-markdown')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    author: {
      schemaDoc: 'The user who wrote the answer',
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
      schemaDoc: 'The answer itself',
      type: Markdown,
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The question of the answer',
      type: Relationship,
      ref: 'ProductQuestion.answer',
    },
  },
  plugins: [atTracking(), byTracking()],
}

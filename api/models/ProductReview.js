const striptags = require('striptags')
const { Integer, Relationship } = require('@keystonejs/fields')
const { Markdown } = require('@keystonejs/fields-markdown')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsMod } = require('../lib/access-control')

module.exports = {
  fields: {
    author: {
      schemaDoc: 'The user that wrote the review',
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    rating: {
      schemaDoc: 'The rating of the review',
      type: Integer,
      isRequired: true,
      // TODO check the value is between 1 and 5
    },
    comment: {
      schemaDoc: 'The review itself',
      type: Markdown,
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The product rating average that belongs this info',
      type: Relationship,
      ref: 'ProductRating.reviews',
      isRequired: true,
    },
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      if (resolvedData.body) {
        return {
          ...resolvedData,
          body: striptags(resolvedData.body), // Don't allow any HTML
        }
      }
      return resolvedData
    },
  },
  access: {
    create: true, // TODO: Check that only a verified customer can leave a review
    read: true,
    delete: userIsMod,
  },
  plugins: [atTracking(), byTracking()],
}

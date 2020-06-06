const striptags = require('striptags')
const { Integer, Markdown, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsModOrOwner, userIsMod } = require('../lib/access-control')

module.exports = {
  fields: {
    productRating: {
      type: Relationship,
      ref: 'ProductRating',
      isRequired: true,
    },
    user: { type: Relationship, ref: 'User', isRequired: true },
    rating: {
      type: Integer,
      isRequired: true,
      // TODO check the value is between 1 and 5
    },
    body: {
      Type: Markdown,
      schemaDoc: 'The review',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
  access: {
    create: true, // TODO: Check that only a verified customer can leave a review
    read: true,
    update: userIsModOrOwner,
    delete: userIsMod,
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
}

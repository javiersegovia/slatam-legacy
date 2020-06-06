const striptags = require('striptags')
const { Text, Checkbox, Integer, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsModOrOwner, userIsAdmin } = require('../lib/access-control')

module.exports = {
  fields: {
    body: {
      // TODO: replace with Markdown field
      type: Text,
      schemaDoc: 'The commentary',
      isRequired: true,
    },
    approved: {
      type: Checkbox,
      schemaDoc: 'Only approved comments are shown',
      access: {
        read: true,
        create: userIsAdmin,
        update: userIsAdmin,
        delete: false,
      },
    },
    votes: {
      type: Integer,
      schemaDoc: 'Number of votes per comment',
      access: {
        read: true,
        update: true,
        delete: false,
      },
    },
    post: {
      type: Relationship,
      ref: 'Post.comments',
      isRequired: true,
    },
    user: {
      type: Relationship,
      ref: 'User',
    },
  },
  plugins: [atTracking(), byTracking()],
  access: {
    read: (payload) => {
      if (userIsAdmin(payload)) {
        return true // Don't filter items for admin users
      }
      // Return only approved comments for non-admin users
      return {
        approved: true,
      }
    },
    create: true,
    update: userIsModOrOwner,
    delete: userIsModOrOwner,
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      if (resolvedData.body) {
        return {
          ...resolvedData,
          date: new Date().toISOString(),
          body: striptags(resolvedData.body), // Don't allow any HTML
        }
      }
      return resolvedData
    },
  },
}

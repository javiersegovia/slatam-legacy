const { Text, Slug, Integer, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAdminOrOwner,
  userIsEditorOrOwner,
  userIsAdmin,
  userIsEditor,
} = require('../lib/access-control')

module.exports = {
  schemaDoc: 'Post data',
  fields: {
    owner: {
      // TODO: replace with authedrelationship
      type: Relationship,
      ref: 'User',
    },
    title: {
      type: Text,
      schemaDoc: 'Title of post',
    },
    path: {
      type: Slug,
      schemaDoc: 'Unique path for post',
      from: 'title',
      isRequired: true,
    },
    claps: {
      type: Integer,
      schemaDoc: 'Number of claps',
    },
    comments: {
      type: Relationship,
      ref: 'Comment.post',
      many: true,
    },
  },
  access: {
    read: true,
    create: userIsEditor,
    update: userIsEditorOrOwner,
    delete: userIsEditorOrOwner,
  },
  plugins: [atTracking(), byTracking()],
}

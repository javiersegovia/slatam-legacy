const { Integer, Relationship } = require('@keystonejs/fields')
const { userIsEditorOrOwner } = require('../lib/access-control')

module.exports = {
  fields: {
    product: { type: Relationship, ref: 'Product', isRequired: true },
    value: {
      type: Integer,
      isRequired: true,
    },
    minRange: {
      type: Integer,
      isRequired: true,
    },
    maxRange: {
      // TODO: add hook to validate max and min range
      type: Integer,
    },
  },
  access: {
    create: true, // TODO: Check that only product owner or manager can create/edit the product price
    read: true,
    update: userIsEditorOrOwner,
    delete: userIsEditorOrOwner, // validate that it is not the last item
  },
}

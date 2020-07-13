const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsProductOwner,
  userIsAdminOrMod,
} = require('../lib/access-control')
const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    title: {
      schemaDoc: 'The title of this product detail',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    content: {
      schemaDoc: 'The content of this product detail',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    belongsTo: {
      schemaDoc: 'The product that belongs this info',
      type: Relationship,
      ref: 'Product.quickDetails',
      access: {
        update: userIsAdminOrMod,
      },
    },
    owner: {
      schemaDoc: 'The company who owns the product',
      type: Relationship,
      ref: 'Company',
      access: {
        update: userIsAdminOrMod,
      },
    },
  },
  hooks: {
    resolveInput: ({ resolvedData, operation, context }) => {
      // When a new product quick detail is created, this happens
      // TODO: query the product to validate that the product owner id is the same to this table owner id and add the product id to belongsTo
      if (operation === 'create') {
        // add the user's company id to product quick detail owner
        resolvedData.owner = context.authedItem.company

        return resolvedData
      }
      return resolvedData
    },
    beforeDelete: ({ operation, context, existingItem }) => {
      const payload = {
        authentication: {
          item: context.authedItem,
        },
        listKey: 'ProductQuickDetail',
        existingItem,
        operation,
      }

      if (!userIsProductOwner(payload) && !userIsAdminOrMod(payload)) {
        throwAccessDenied(null, context, existingItem)
      }
    },
  },
  plugins: [atTracking(), byTracking()],
}

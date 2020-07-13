const { Integer, Relationship, Float } = require('@keystonejs/fields')
const {
  userIsProductOwner,
  userIsAdminOrMod,
} = require('../lib/access-control')
const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    value: {
      schemaDoc: 'The price within this range',
      type: Float,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    minRange: {
      schemaDoc: 'The minimun range of the price range',
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    maxRange: {
      // TODO: add hook to validate max and min range
      schemaDoc: 'The maximum range of the price range',
      type: Integer,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    belongsTo: {
      schemaDoc: 'The product who belongs the price range',
      type: Relationship,
      ref: 'Product.priceRanges',
      access: {
        update: userIsAdminOrMod,
      },
    },
    owner: {
      schemaDoc: 'The company that owns the product',
      type: Relationship,
      ref: 'Company',
      access: {
        update: userIsAdminOrMod,
      },
    },
  },
  hooks: {
    resolveInput: ({ resolvedData, operation, context, existingItem }) => {
      // When a new product prince range is created, this happens
      // TODO: query the product to validate that the product owner id is the same to the user company id and add the product id to belongsTo
      if (operation === 'create') {
        // add the user's company id to product princeRange's owner
        resolvedData.owner = context.authedItem.company

        return resolvedData
      }
      return resolvedData
    },
    beforeDelete: ({ operation, context, existingItem }) => {
      // validate that it is not the last item
      const payload = {
        authentication: {
          item: context.authedItem,
        },
        listKey: 'ProductPriceRange',
        existingItem,
        operation,
      }

      if (!userIsProductOwner(payload) && !userIsAdminOrMod(payload)) {
        throwAccessDenied(null, context, existingItem)
      }
    },
  },
  access: {
    // only create if the person is product owner
    read: true,
  },
}

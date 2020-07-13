const { Integer, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsProductOwner,
  userIsAdminOrMod,
  userIsCompanyMember,
} = require('../lib/access-control')
const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    minQuantity: {
      schemaDoc: 'The minimum quantity for the lead time',
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    maxQuantity: {
      schemaDoc: 'The maximum quantity for the lead time',
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    deliveryDays: {
      schemaDoc: 'The days that take to the supplier to fulfill the order',
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    belongsTo: {
      schemaDoc: 'To which product logistic belongs this info',
      type: Relationship,
      ref: 'ProductLogistic.leadTime',
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
    resolveInput: ({ resolvedData, operation, context, existingItem }) => {
      // When a new product leadtime is created, this happens
      // TODO: query the product to validate that the product owner id is the same to the user company id and add the product logistic id to belongsTo
      if (operation === 'create') {
        const payload = {
          authentication: {
            item: context.authedItem,
          },
        }
        // check if the user has a company or is admin/mod
        if (!userIsCompanyMember(payload) && !userIsAdminOrMod(payload)) {
          throwAccessDenied(null, context)
        }
        // add the user's company id to product leadtime owner field
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
        listKey: 'ProductLeadTime',
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

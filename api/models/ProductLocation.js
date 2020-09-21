const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsProductOwner,
  userIsAdminOrMod,
  userIsCompanyMember,
} = require('../lib/access-control')
// const {
//   throwAccessDenied,
// } = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    addressLine1: {
      schemaDoc: "The first line of the product location's address",
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    addressLine2: {
      schemaDoc: "The second line of the product location's address",
      type: Text,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    city: {
      schemaDoc: 'The city where the product is',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    state: {
      schemaDoc: 'the state where the product is',
      type: Relationship,
      ref: 'State',
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    belongsTo: {
      schemaDoc: 'The product logistics that this info belongs',
      type: Relationship,
      ref: 'ProductLogistic.location',
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
      // When a new product location is created, this happens
      // TODO: query the product to validate that the product owner id is the same to the user company id and add the product logistic id to belongsTo
      if (operation === 'create') {
        const payload = {
          authentication: {
            item: context.authedItem,
          },
        }
        // check if the user has a company or is admin/mod
        if (!userIsCompanyMember(payload) && !userIsAdminOrMod(payload)) {
          // TODO: fix throwAccessDenied
          // throwAccessDenied(null, context)
        }
        // add the user's company id to product location owner field
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
        listKey: 'ProductLocation',
        existingItem,
        operation,
      }

      if (!userIsProductOwner(payload) && !userIsAdminOrMod(payload)) {
        // TODO: fix throwAccessDenied
        // throwAccessDenied(null, context, existingItem)
      }
    },
  },
  plugins: [atTracking(), byTracking()],
}

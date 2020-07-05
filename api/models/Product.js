const { Text, Relationship, Select, Checkbox } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsProductOwner,
  userIsAdminOrMod,
  userIsAuthenticated,
} = require('../lib/access-control')
const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    description: {
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    // images: {
    //   type: Relationship,
    //   ref: 'ProductImage',
    //   many: true
    // },
    // rating: {
    //   type: Relationship,
    //   ref: 'ProductRating',
    // },
    priceRanges: {
      type: Relationship,
      ref: 'ProductPriceRange.product',
      isRequired: true,
      many: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    logistics: {
      type: Relationship,
      ref: 'ProductLogistic.belongsTo',
    },
    // quickDetails: {
    //   type: Relationship,
    //   ref: 'ProductQuickDetails',
    //   many: true,
    // },
    // status: {
    //   type: Select,
    //   defaultValue: 'VISIBLE',
    //   options: ['VISIBLE', 'HIDDEN'],
    //   isRequired: true
    // },
    // [TODO]
    // 1. add the deleted status
    SKU: {
      schemaDocs:
        'SKU means Stock Keeping unit. Its a field for inventory managment',
      type: Text,
    },
    GTIN: {
      schemaDocs:
        'GTIN means Grobal Trade Item Number. It is used for identifying item globally',
      type: Text,
    },
    MPN: {
      schemaDocs:
        'MPN means Manufacturer Part Number. It is used for identifying a specific product among all products from the same manufacturer',
      type: Text,
    },
    belongsTo: {
      type: Relationship,
      ref: 'Company.products',
      isRequired: true,
      access: {
        update: (payload) => userIsAdminOrMod(payload),
      },
    },
  },
  hooks: {
    beforeDelete: async ({ operation, context, existingItem }) => {
      const payload = {
        authentication: {
          item: context.authedItem,
        },
        listKey: 'Product',
        existingItem,
        operation,
      }

      if (!userIsProductOwner(payload) && !userIsAdminOrMod(payload)) {
        throwAccessDenied(null, context, existingItem)
      }
    },
  },
  access: {
    read: true,
    create: userIsAuthenticated,
  },
  plugins: [atTracking(), byTracking()],
}

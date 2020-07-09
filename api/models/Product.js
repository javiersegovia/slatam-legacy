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
      schemaDocs: 'The title of the product',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    description: {
      schemaDocs: 'The description of the product',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    // images: {
    //   schemaDocs: 'The images of the product',
    //   type: Relationship,
    //   ref: 'ProductImage',
    //   many: true,
    // },
    // rating: {
    //   schemaDocs: 'The rating of the product',
    //   type: Relationship,
    //   ref: 'ProductRating',
    // },
    priceRanges: {
      schemaDocs: 'The price ranges of the product',
      type: Relationship,
      ref: 'ProductPriceRange.belongsTo',
      isRequired: true,
      many: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    logistics: {
      schemaDocs: 'The logistics of the product',
      type: Relationship,
      ref: 'ProductLogistic.belongsTo',
    },
    quickDetails: {
      schemaDocs: 'The quick details of the product',
      type: Relationship,
      ref: 'ProductQuickDetail.belongsTo',
      many: true,
    },
    status: {
      schemaDocs: 'The status of the product',
      type: Select,
      defaultValue: 'VISIBLE',
      options: ['VISIBLE', 'HIDDEN'],
      isRequired: true,
    },
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
      schemaDocs: 'The company who belongs this product',
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

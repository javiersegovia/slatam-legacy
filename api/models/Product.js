const { Text, Relationship, Select, Checkbox } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
// const {
//   throwAccessDenied,
// } = require('@keystonejs/keystone/lib/List/graphqlErrors')
const {
  userIsProductOwner,
  userIsAdminOrMod,
  userIsCompanyMember,
} = require('../lib/access-control')

module.exports = {
  fields: {
    title: {
      schemaDoc: 'The title of the product',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    description: {
      schemaDoc: 'The description of the product',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    // images: {
    //   schemaDoc: 'The images of the product',
    //   type: Relationship,
    //   ref: 'ProductImage',
    //   many: true,
    // },
    rating: {
      schemaDoc: 'The rating of the product',
      type: Relationship,
      ref: 'ProductRating.belongsTo',
      access: {
        update: userIsAdminOrMod,
      },
    },
    priceRanges: {
      schemaDoc: 'The price ranges of the product',
      type: Relationship,
      ref: 'ProductPriceRange.belongsTo',
      many: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    logistics: {
      schemaDoc: 'The logistics of the product',
      type: Relationship,
      ref: 'ProductLogistic.belongsTo',
      access: {
        update: userIsAdminOrMod,
      },
    },
    quickDetails: {
      schemaDoc: 'The quick details of the product',
      type: Relationship,
      ref: 'ProductQuickDetail.belongsTo',
      many: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    status: {
      schemaDoc: 'The status of the product',
      type: Select,
      defaultValue: 'VISIBLE',
      options: ['VISIBLE', 'HIDDEN'],
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    SKU: {
      schemaDoc:
        'SKU means Stock Keeping unit. Its a field for inventory managment',
      type: Text,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    GTIN: {
      schemaDoc:
        'GTIN means Grobal Trade Item Number. It is used for identifying item globally',
      type: Text,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    MPN: {
      schemaDoc:
        'MPN means Manufacturer Part Number. It is used for identifying a specific product among all products from the same manufacturer',
      type: Text,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    questions: {
      schemaDoc: 'The questions of the product',
      type: Relationship,
      ref: 'ProductQuestion.belongsTo',
      many: true,
      access: {
        update: userIsAdminOrMod,
      },
    },
    owner: {
      schemaDoc: 'The company who belongs this product',
      type: Relationship,
      ref: 'Company.products',
      access: {
        update: userIsAdminOrMod,
      },
    },
  },
  hooks: {
    resolveInput: ({ resolvedData, operation, context }) => {
      // When a new product is created, this happens
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
          return
        }
        // add the user's company id to product's owner field
        resolvedData.owner = context.authedItem.company
        return resolvedData
      }
      // TODO validate if the priceRange and quickDetails to be added corresponds to the product
      return resolvedData
    },
    beforeDelete: ({ operation, context, existingItem }) => {
      const payload = {
        authentication: {
          item: context.authedItem,
        },
        listKey: 'Product',
        existingItem,
        operation,
      }
      if (!userIsProductOwner(payload) && !userIsAdminOrMod(payload)) {
        // throwAccessDenied(null, context, existingItem)
        // TODO: add custom throwAccessDenied
      }
    },
    MPN: {
      schemaDocs:
        'MPN means Manufacturer Part Number. It is used for identifying a specific product among all products from the same manufacturer',
      type: Text,
    },
  },
  access: {
    read: true,
  },
  plugins: [atTracking(), byTracking()],
}

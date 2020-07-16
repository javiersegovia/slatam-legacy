const { Text, Relationship, Integer, Select } = require('@keystonejs/fields')
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
    unitType: {
      schemaDoc: 'The type of unit that the product use',
      type: Relationship,
      ref: 'ProductUnitType',
      access: {
        update: userIsAdminOrMod,
      },
    },
    minQuantity: {
      schemaDoc: 'The minimun quantity that can be order',
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    maxQuantity: {
      schemaDoc: 'The maximum quantity that can be order',
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    location: {
      schemaDoc: 'The specific location of the product',
      type: Relationship,
      ref: 'ProductLocation.belongsTo',
      access: {
        update: userIsAdminOrMod,
      },
    },
    shippingFrom: {
      schemaDoc: 'The location which the product will be shipped',
      type: Relationship,
      ref: 'State',
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    supplyQuantity: {
      schemaDoc:
        'The number of products the company can supply in a determinated time',
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    supplyIntervalDays: {
      schemaDoc: "The determined time which refers 'supplyQuantity'",
      type: Integer,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    leadTime: {
      schemaDoc:
        'The time that takes to the supplier to fulfill the order, once its paid',
      type: Relationship,
      ref: 'ProductLeadTime.belongsTo',
      many: true,
      access: {
        update: userIsAdminOrMod,
      },
    },
    modeOfTransport: {
      schemaDoc: 'The method which the product can be shipped',
      type: Select,
      options: ['LAND', 'WATER', 'AIR'],
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    incoTerms: {
      schemaDoc: 'The responsabilities of both parties regarding shipping',
      type: Relationship,
      ref: 'ProductIncoTerm',
      many: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    dimension: {
      schemaDoc: 'The dimension of the product',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    weight: {
      schemaDoc: 'The weight of the product',
      type: Text,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    shippingDimension: {
      schemaDoc: 'The dimension of the package of the product',
      type: Text,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    shippingWeight: {
      schemaDoc: 'The overall weight of the package with the product inside',
      type: Text,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    belongsTo: {
      schemaDoc: 'The product who belongs this info',
      type: Relationship,
      ref: 'Product.logistics',
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
      // When a new product logistic is created, this happens
      // TODO: query the product to validate that the product owner id is the same to the user company id and add the product id to belongsTo
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
        // add the user's company id to product logistic owner field
        resolvedData.owner = context.authedItem.company

        return resolvedData
      }
      // TODO validate if the leadTimes and location to be added corresponds to the product
      return resolvedData
    },
    beforeDelete: ({ operation, context, existingItem }) => {
      const payload = {
        authentication: {
          item: context.authedItem,
        },
        listKey: 'ProductLogistic',
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
  },
  plugins: [atTracking(), byTracking()],
}

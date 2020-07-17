const { Text, Relationship, Select } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAdminOrMod,
  userIsCompanyOwner,
  userIsCompanyAgent,
  userIsCompanyMember,
} = require('../lib/access-control')
const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    name: {
      schemaDoc: 'The name of the company',
      type: Text,
      isUnique: true,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsCompanyOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    role: {
      schemaDoc: 'The role of the company',
      type: Select,
      defaultValue: 'SUPPLIER',
      options: [
        'MANUFACTURER',
        'SUPPLIER',
        'DISTRIBUTOR',
        'RESELLER',
        'BROKER',
        'OTHERS',
      ],
      isRequired: true,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    rating: {
      schemaDoc: 'The rating of the company',
      type: Relationship,
      ref: 'CompanyRating.belongsTo',
      access: {
        update: userIsAdminOrMod,
      },
    },
    shipsTo: {
      schemaDoc: 'The countries the company can ship',
      type: Relationship,
      ref: 'Country',
      many: true,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    info: {
      schemaDoc: 'Useful info about the company',
      type: Relationship,
      ref: 'CompanyInfo.belongsTo',
      access: {
        update: userIsAdminOrMod,
      },
    },
    products: {
      schemaDoc: 'The products of the company',
      type: Relationship,
      ref: 'Product.owner',
      many: true,
      access: {
        update: userIsAdminOrMod,
      },
    },
    owner: {
      schemaDoc: 'The owner of the company',
      type: Relationship,
      ref: 'User',
      access: {
        update: userIsAdminOrMod,
      },
    },
    categories: {
      schemaDoc: 'The categories of the company',
      type: Relationship,
      ref: 'Category',
      many: true,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    subcategories: {
      schemaDoc: 'The subcategory of the company',
      type: Relationship,
      ref: 'Subcategory',
      many: true,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    members: {
      schemaDoc: 'The people who represent the company',
      type: Relationship,
      ref: 'User.company',
      many: true,
      access: {
        update: (payload) =>
          userIsCompanyOwner(payload) || userIsAdminOrMod(payload),
      },
    },
  },
  hooks: {
    resolveInput: ({ resolvedData, operation, context }) => {
      // When a new company is created, this happens
      if (operation === 'create') {
        const payload = {
          authentication: {
            item: context.authedItem,
          },
        }
        // check if the user has a company or is admin/mod
        if (userIsCompanyMember(payload) && !userIsAdminOrMod(payload)) {
          throwAccessDenied(null, context)
        }
        // add the user's id to company's owner field
        resolvedData.owner = context.authedItem.id
        // reset the products in case the user adds a product when creating a company
        resolvedData.products = []
        // reset the info field in case the user adds a info id when creating a company
        resolvedData.info = null
        // create an array for members and reset the array if the owner adds a member
        resolvedData.members = []
        // add the owner in the members array
        resolvedData.members.push(context.authedItem.id)
        return resolvedData
      }
      // TODO validate if the companyInfo and members to be added corresponds to the company
      return resolvedData
    },
    beforeDelete: ({ operation, context, existingItem }) => {
      const payload = {
        authentication: {
          item: context.authedItem,
        },
        listKey: 'Company',
        existingItem,
        operation,
      }
      if (!userIsCompanyOwner(payload) && !userIsAdminOrMod(payload)) {
        throwAccessDenied(null, context, existingItem)
      }
    },
  },
  access: {
    read: true,
  },
  plugins: [atTracking(), byTracking()],
}

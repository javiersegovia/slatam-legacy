const { Text, Relationship, Select } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAuthenticated } = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDoc: 'The name of the company',
      type: Text,
      isRequired: true,
    },
    role: {
      schemaDoc: 'The role of the company',
      type: Select,
      defaultValue: 'Supplier',
      options: [
        'MANUFACTURER',
        'SUPPLIER',
        'DISTRIBUTOR',
        'RESELLER',
        'BROKER',
        'OTHERS',
      ],
      isRequired: true,
    },
    // rating: {
    //   schemaDoc: 'The rating of the company',
    //   type: Relationship,
    //   ref: 'CompanyRating',
    // },
    shipsTo: {
      schemaDoc: 'The countries the company can ship',
      type: Relationship,
      ref: 'Country',
      many: true,
      isRequired: true,
    },
    info: {
      schemaDoc: 'Useful info about the company',
      type: Relationship,
      ref: 'CompanyInfo.belongsTo',
    },
    products: {
      schemaDoc: 'The products of the company',
      type: Relationship,
      ref: 'Product.belongsTo',
      many: true,
    },
    belongsTo: {
      schemaDoc: 'The owner of the company',
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    categories: {
      schemaDocs: 'The categories of the company',
      type: Relationship,
      ref: 'Category',
      many: true,
    },
    subcategories: {
      schemaDocs: 'The subcategory of the company',
      type: Relationship,
      ref: 'Subcategory',
      many: true,
    },
    members: {
      // [TODO]
      // 1. put his company as a default member
      schemaDoc: 'The people who represent the company',
      type: Relationship,
      ref: 'User.companyMember',
      many: true,
    },
  },
  hooks: {
    beforeDelete: async ({ operation, context, existingItem }) => {
      const payload = {
        authentication: {
          item: context.authedItem,
        },
        listKey: 'Company',
        existingItem,
        operation,
      }
      userIsCompanyMember(payload)
    },
  },
  access: {
    read: true,
    create: userIsAuthenticated,
  },
  plugins: [atTracking(), byTracking()],
}

const { Text, Slug, Relationship, Select } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsCompanyMember,
  userIsAuthenticated,
  userIsMod,
} = require('../lib/access-control')

module.exports = {
  fields: {
    name: {
      schemaDoc: 'The name of the company',
      type: Text,
      isRequired: true,
      access: {
        update: userIsCompanyMember,
      },
    },
    // path: {
    //     schemaDoc: 'Unique path for companies',
    //     type: Slug,
    //     from: 'name',
    // },
    role: {
      schemaDoc: 'The role of the company',
      type: Select,
      defaultValue: 'Supplier',
      // [TODO]
      // 1. defaultValue doesnt work
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
    //     schemaDoc: 'The rating of the company',
    //     type: Relationship,
    //     ref: 'CompanyRating',
    // },
    // shipsTo: {
    //     schemaDoc: 'The countries the company can ship',
    //     type: Relationship,
    //     ref: 'Country',
    //     many: true
    // },
    belongsTo: {
      schemaDoc: 'The owner of the company',
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    // info: {
    //     schemaDoc: 'Useful info about the company',
    //     type: Relationship,
    //     ref: 'CompanyInfo',
    //     isRequired: true
    // },
    products: {
      schemaDoc: 'The products of the company',
      type: Relationship,
      ref: 'Product.belongsTo',
      many: true,
    },
    members: {
      // [TODO]
      // 1. put his company as a default member
      schemaDoc: 'The people who represent the company',
      type: Relationship,
      ref: 'User.companyMember',
      many: true,
      access: {
        update: userIsCompanyMember,
      },
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

const { Text, Slug, Relationship, Select } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAuthenticated,
  userIsMemberOrAdmin,
  userIsAdminOrMod
} = require('../lib/access-control')

module.exports = {
    fields: {
        name: {
            schemaDoc: 'The name of the company',
            type: Text,
            isRequired: true,
            access: {
                update: userIsMemberOrAdmin
            }
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
            options: ['Manufacturer', 'Supplier', 'Distributor', 'Reseller', 'Broker', 'Others'],
            isRequired: true,
            access: {
                update: userIsMemberOrAdmin
            }
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
            ref: 'User.company',
            isRequired: true
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
            many: true
        },
        members: {
            // [TODO]
            // 1. put his company as a default member
            schemaDoc: 'The people who represent the company',
            type: Relationship,
            ref: 'User.member',
            many: true
        }
    },
    access: {
        create: userIsAuthenticated,
        delete: userIsAdminOrMod,
      },
    plugins: [atTracking(), byTracking()],
}
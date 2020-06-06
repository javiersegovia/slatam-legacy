const { Text, Relationship, Select, Checkbox } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAuthenticated,
  userIsMemberOrAdmin,
  userIsAdminOrMod
} = require('../lib/access-control')

module.exports = {
  fields: {
    belongsTo: { 
      type: Relationship, 
      ref: 'Company.products', 
      isRequired: true,
    },
    title: { 
      type: Text, 
      isRequired: true,
      access: {
        update: userIsMemberOrAdmin
      }
    },
    description: {
      type: Text,
      isRequired: true
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
    // priceRanges: {
    //   type: Relationship,
    //   ref: 'ProductPriceRange',
    //   isRequired: true,
    //   many: true,
    // },
    // logistics: {
    //   type: Relationship,
    //   ref: 'ProductLogistics',
    //   isRequired: true
    // },
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
      type: Text
     },
    GTIN: {
      schemaDocs: 'GTIN means Grobal Trade Item Number. It is used for identifying item globally',
      type: Text 
    },
    MPN: {
      schemaDocs: 
      'MPN means Manufacturer Part Number. It is used for identifying a specific product among all products from the same manufacturer',
      type: Text 
    }
  },
  access: {
    create: userIsAuthenticated,
    read: true,
    delete: userIsAdminOrMod,
  },
  plugins: [atTracking(), byTracking()],
}

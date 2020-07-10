const { Text, Relationship, Integer, Select } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAuthenticated } = require('../lib/access-control')

module.exports = {
  fields: {
    // unitType: {
    //     schemaDoc: 'The type of unit that the product use',
    //     type: Relationship,
    //     ref: 'ProductUnitType',
    //     isRequired: true
    // },
    minQuantity: {
      schemaDoc: 'The minimun quantity that can be order',
      type: Integer,
      isRequired: true,
    },
    maxQuantity: {
      schemaDoc: 'The maximum quantity that can be order',
      type: Integer,
      isRequired: true,
    },
    location: {
      schemaDoc: 'The specific location of the product',
      type: Relationship,
      ref: 'ProductLocation.belongsTo',
      isRequired: true,
    },
    shippingFrom: {
      schemaDoc: 'The location which the product will be shipped',
      type: Relationship,
      ref: 'State',
      isRequired: true,
    },
    supplyQuantity: {
      schemaDoc:
        'The number of products the company can supply in a determinated time',
      type: Integer,
      isRequired: true,
    },
    supplyIntervalDays: {
      schemaDoc: "The determined time which refers 'supplyQuantity'",
      type: Integer,
      isRequired: true,
    },
    leadTime: {
      schemaDoc:
        'The time that takes to the supplier to fulfill the order, once its paid',
      type: Relationship,
      ref: 'ProductLeadTime.belongsTo',
      many: true,
      isRequired: true,
    },
    modeOfTransport: {
      schemaDoc: 'The method which the product can be shipped',
      type: Select,
      options: ['LAND', 'WATER', 'AIR'],
      isRequired: true,
    },
    incoTerms: {
      schemaDoc: 'The responsabilities of both parties regarding shipping',
      type: Relationship,
      ref: 'ProductIncoTerm',
      many: true,
      isRequired: true,
    },
    dimension: {
      schemaDoc: 'The dimension of the product',
      type: Text,
      isRequired: true,
    },
    weight: {
      schemaDoc: 'The weight of the product',
      type: Text,
      isRequired: true,
    },
    shippingDimension: {
      schemaDoc: 'The dimension of the package of the product',
      type: Text,
    },
    shippingWeight: {
      schemaDoc: 'The overall weight of the package with the product inside',
      type: Text,
    },
    belongsTo: {
      schemaDoc: 'The product who belongs this info',
      type: Relationship,
      ref: 'Product.logistics',
      isRequired: true,
    },
  },
  access: {
    create: userIsAuthenticated,
    read: true,
  },
  plugins: [atTracking(), byTracking()],
}

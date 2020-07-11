const { Text, Relationship, Integer, Float } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    title: {
      schemaDoc: 'The title of the product',
      type: Text,
      isRequired: true,
    },
    description: {
      schemaDoc: 'The description of the product',
      type: Text,
      isRequired: true,
    },
    quantity: {
      schemaDoc: 'The quantity of the product',
      type: Integer,
      isRequired: true,
    },
    price: {
      schemaDoc: 'The price of the product',
      type: Float,
      isRequired: true,
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
      ref: 'ProductRating',
      isRequired: true,
    },
    unitType: {
      schemaDoc: 'The type of unit that the product use',
      type: Relationship,
      ref: 'ProductUnitType',
      isRequired: true,
    },
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
    quickDetails: {
      schemaDoc: 'The details of the product',
      type: Text,
    },
    addressLine1: {
      schemaDoc: "The first line of the product location's address",
      type: Text,
      isRequired: true,
    },
    addressLine2: {
      schemaDoc: "The second line of the product location's address",
      type: Text,
    },
    city: {
      schemaDoc: 'The city where the product is',
      type: Text,
      isRequired: true,
    },
    state: {
      schemaDoc: 'the state where the product is',
      type: Relationship,
      ref: 'State',
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
      type: Text,
      isRequired: true,
    },
    modeOfTransport: {
      schemaDoc: 'The method which the product can be shipped',
      type: Text,
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
    SKU: {
      schemaDoc:
        'SKU means Stock Keeping unit. Its a field for inventory managment',
      type: Text,
    },
    GTIN: {
      schemaDoc:
        'GTIN means Grobal Trade Item Number. It is used for identifying item globally',
      type: Text,
    },
    MPN: {
      schemaDoc:
        'MPN means Manufacturer Part Number. It is used for identifying a specific product among all products from the same manufacturer',
      type: Text,
    },
    company: {
      schemaDoc: 'The company who belongs this product',
      type: Relationship,
      ref: 'Company',
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The order who belongs this product',
      type: Relationship,
      ref: 'Order.orderProducts',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

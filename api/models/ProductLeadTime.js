const { Integer, Relationship } = require('@keystonejs/fields')

module.exports = {
  fields: {
    minQuantity: {
      schemaDoc: 'The minimum quantity for the lead time',
      type: Integer,
      isRequired: true,
    },
    maxQuantity: {
      schemaDoc: 'The maximum quantity for the lead time',
      type: Integer,
      isRequired: true,
    },
    deliveryDays: {
      schemaDoc: 'The days that take to the supplier to fulfill the order',
      type: Integer,
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'To which product logistic belongs this info',
      type: Relationship,
      ref: 'ProductLogistic.leadTime',
    },
  },
}

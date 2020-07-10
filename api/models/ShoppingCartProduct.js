const { Relationship, Integer } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    product: {
      schemaDoc: 'The product itself',
      type: Relationship,
      ref: 'Product',
    },
    quantity: {
      schemaDoc: 'The quantity of the product',
      type: Integer,
      defaultValue: 1,
      isRequired: true,
    },
    belongsTo: {
      schemaDoc: 'The shopping cart who belongs this product',
      type: Relationship,
      ref: 'ShoppingCart.products',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

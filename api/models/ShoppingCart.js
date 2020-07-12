const { Relationship, Float } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    totalPrice: {
      schemaDoc: 'The total price of the order',
      type: Float,
      isRequired: true,
    },
    products: {
      schemaDoc: 'The products in the shopping cart',
      type: Relationship,
      ref: 'ShoppingCartProduct.belongsTo',
      many: true,
    },
    belongsTo: {
      schemaDoc: 'The user who belongs this shopping cart',
      type: Relationship,
      ref: 'User.shoppingCart',
    },
  },
  plugins: [atTracking(), byTracking()],
}

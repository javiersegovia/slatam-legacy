const { Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
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
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

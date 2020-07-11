const { Relationship, Float, Select } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')

module.exports = {
  fields: {
    totalPrice: {
      schemaDoc: 'The total price of the order',
      type: Float,
      isRequired: true,
    },
    status: {
      schemaDoc: 'The status of the order',
      type: Select,
      options: ['WAITING FOR A REQUIREMENT', 'CANCELLED', 'COMPLETED'],
      dataType: 'string',
    },
    orderProducts: {
      schemaDoc: 'The products in the order',
      type: Relationship,
      ref: 'OrderProduct.belongsTo',
      many: true,
    },
    belongsTo: {
      schemaDoc: 'The user who belongs this shopping cart',
      type: Relationship,
      ref: 'User.orders',
      isRequired: true,
    },
  },
  plugins: [atTracking(), byTracking()],
}

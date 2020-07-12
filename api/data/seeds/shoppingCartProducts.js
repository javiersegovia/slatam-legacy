module.exports = {
  ShoppingCartProduct: [
    {
      product: { where: { title: 'Test product' } },
      price: 10,
      quantity: 1,
      belongsTo: { where: { id: 1 } },
    },
  ],
}

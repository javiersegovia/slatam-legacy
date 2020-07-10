module.exports = {
  ShoppingCartProduct: [
    {
      product: { where: { title: 'Test product' } },
      quantity: 1,
      belongsTo: { where: { id: 1 } },
    },
  ],
}

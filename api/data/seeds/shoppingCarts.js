module.exports = {
  ShoppingCart: [
    {
      totalPrice: 10,
      belongsTo: { where: { firstName: 'admin' } },
    },
  ],
}

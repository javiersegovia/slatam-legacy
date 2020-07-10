module.exports = {
  ShoppingCart: [
    {
      belongsTo: { where: { firstName: 'admin' } },
    },
  ],
}

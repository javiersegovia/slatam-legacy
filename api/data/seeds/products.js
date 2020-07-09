module.exports = {
  Product: [
    {
      title: 'Test product',
      description: 'This is a product description',
      belongsTo: { where: { name: 'Slatam Group' } },
      status: 'VISIBLE',
    },
  ],
}

module.exports = {
  ProductPriceRange: [
    {
      value: 10,
      minRange: 1,
      maxRange: 10,
      belongsTo: { where: { title: 'Test product' } },
    },
    {
      value: 7,
      minRange: 11,
      maxRange: 29,
      belongsTo: { where: { title: 'Test product' } },
    },
  ],
}

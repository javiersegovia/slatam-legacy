module.exports = {
  ProductPriceRange: [
    {
      product: { where: { title: 'Test product' } },
      value: 10,
      minRange: 1,
      maxRange: 10,
    },
    {
      product: { where: { title: 'Test product' } },
      value: 7,
      minRange: 11,
      maxRange: 29,
    },
  ],
}

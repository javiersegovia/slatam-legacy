module.exports = {
  ProductLogistic: [
    {
      minQuantity: 10,
      maxQuantity: 20,
      shippingFrom: { where: { name: 'Barinas' } },
      supplyQuantity: 30,
      supplyIntervalDays: 7,
      leadTime: 7,
      dimension: '20cm',
      weight: '100gr',
      shippingDimension: '30cm',
      shippingWeight: '150gr',
      belongsTo: { where: { title: 'Test product' } },
    },
  ],
}

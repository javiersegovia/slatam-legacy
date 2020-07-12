module.exports = {
  ProductLeadTime: [
    {
      minQuantity: 1,
      maxQuantity: 100,
      deliveryDays: 7,
      belongsTo: { where: { id: 1 } },
    },
    {
      minQuantity: 101,
      maxQuantity: 200,
      deliveryDays: 9,
      belongsTo: { where: { id: 1 } },
    },
  ],
}

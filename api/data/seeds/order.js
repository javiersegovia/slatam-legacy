module.exports = {
  Order: [
    {
      totalPrice: 10,
      status: 'WAITING FOR A REQUIREMENT',
      belongsTo: { where: { firstName: 'admin' } },
    },
  ],
}

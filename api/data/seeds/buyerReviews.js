module.exports = {
  BuyerReview: [
    {
      author: { where: { firstName: 'admin' } },
      authorAssociatedCompany: { where: { name: 'Slatam Group' } },
      rating: 5,
      comment: 'I recommend this buyer',
      belongsToCompany: { where: { id: 1 } },
    },
  ],
}

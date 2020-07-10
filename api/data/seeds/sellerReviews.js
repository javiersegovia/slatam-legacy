module.exports = {
  SellerReview: [
    {
      author: { where: { firstName: 'admin' } },
      authorAssociatedCompany: { where: { name: 'Slatam Group' } },
      rating: 5,
      comment: 'The seller was great',
      belongsTo: { where: { id: 1 } },
    },
  ],
}

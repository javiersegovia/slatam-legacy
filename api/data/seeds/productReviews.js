module.exports = {
  ProductReview: [
    {
      author: { where: { firstName: 'admin' } },
      rating: 5,
      comment: 'I love this product',
      belongsTo: { where: { id: 1 } },
    },
  ],
}

module.exports = {
  ProductRating: [
    {
      average: 4.5,
      reviewsCount: 1,
      belongsTo: { where: { title: 'Test product' } },
    },
  ],
}

module.exports = {
  UserRating: [
    {
      buyerRating: 4.5,
      belongsTo: { where: { firstName: 'admin' } },
    },
  ],
}

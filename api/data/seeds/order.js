module.exports = {
  Order: [
    {
      belongsTo: { where: { firstName: 'admin' } },
    },
  ],
}

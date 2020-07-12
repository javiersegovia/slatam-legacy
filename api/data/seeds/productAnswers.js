module.exports = {
  ProductAnswer: [
    {
      author: { where: { firstName: 'admin' } },
      authorAssociatedCompany: { where: { name: 'Slatam Group' } },
      description: 'This is an answer',
      belongsTo: { where: { id: 1 } },
    },
  ],
}

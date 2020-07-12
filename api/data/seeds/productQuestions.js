module.exports = {
  ProductQuestion: [
    {
      author: { where: { firstName: 'admin' } },
      authorAssociatedCompany: { where: { name: 'Slatam Group' } },
      description: 'This is a question',
      belongsTo: { where: { title: 'Test product' } },
    },
  ],
}

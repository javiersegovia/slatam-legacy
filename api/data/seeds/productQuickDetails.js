module.exports = {
  ProductQuickDetail: [
    {
      title: 'Processor Brand',
      content: 'Intel',
      belongsTo: { where: { title: 'Test product' } },
    },
  ],
}

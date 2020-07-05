module.exports = {
  Company: [
    {
      name: 'Slatam Group',
      role: 'SUPPLIER',
      belongsTo: { where: { firstName: 'admin' } },
    },
    {
      name: 'Foro Indie',
      role: 'SUPPLIER',
      belongsTo: { where: { firstName: 'user2' } },
    },
  ],
}

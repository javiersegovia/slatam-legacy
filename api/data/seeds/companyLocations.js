module.exports = {
  CompanyLocation: [
    {
      addressLine1: 'Av. 23 de Enero, frente al Banco Provincial',
      addressLine2: 'Edificio Terra Nostra',
      city: 'Barinas',
      state: { where: { name: 'Barinas' } },
      belongsTo: { where: { id: 1 } },
    },
  ],
}

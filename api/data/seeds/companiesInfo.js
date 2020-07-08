module.exports = {
  CompanyInfo: [
    {
      foundedAt: 2013,
      languages: { where: { name: 'English' } },
      description: 'This a company description test',
      employeesRange: 'Between 1 and 9',
      phone: '+584245191125',
      postalCode: '5201',
      country: { where: { name: 'Venezuela' } },
      belongsTo: { where: { name: 'Slatam Group' } },
    },
    {
      foundedAt: 2020,
      languages: { where: { name: 'English' } },
      description: 'This a company description test',
      employeesRange: 'Between 1 and 9',
      phone: '+584245191125',
      postalCode: '5201',
      country: { where: { name: 'Venezuela' } },
      belongsTo: { where: { name: 'Foro Indie' } },
    },
  ],
}

const utcDate = new Date(Date.now())

module.exports = {
  UserInfo: [
    {
      birthDate: utcDate,
      phone: '+584245191125',
      postalCode: '5201',
      languages: { where: { name: 'English' } },
      belongsTo: { where: { firstName: 'admin' } },
    },
  ],
}

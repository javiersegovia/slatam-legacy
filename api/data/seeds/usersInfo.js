const utcDate = new Date(Date.now())

module.exports = ({ languages, users }) => [
  {
    data: {
      // birthDate: utcDate,
      phone: '+584245191125',
      postalCode: '5201',
      languages: {
        connect: { id: languages.find((lang) => lang.name === 'English').id },
      },
      belongsTo: { id: users.find((user) => user.firstName === 'admin').id },
    },
  },
]

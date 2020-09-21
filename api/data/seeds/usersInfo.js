const utcDate = new Date(Date.now())
// TODO Aisar: revisar el utcDate, que por alguna razón no se guarda bien al sedeear.

module.exports = ({ languages, users }) => [
  {
    data: {
      // birthDate: utcDate,
      phone: '+584245191125',
      postalCode: '5201',
      languages: {
        connect: { id: languages.find((lang) => lang.name === 'English').id },
      },
      belongsTo: {
        connect: {
          id: users.find((user) => user.firstName === 'admin').id,
        },
      },
    },
  },
]

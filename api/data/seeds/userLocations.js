module.exports = ({ users, states }) => [
  {
    data: {
      addressLine1: 'Av. 23 de Enero, frente al Banco Provincial',
      addressLine2: 'Edificio Terra Nostra',
      city: 'Barinas',
      state: {
        connect: { id: states.find((state) => state.name === 'Barinas').id },
      },
      belongsTo: {
        connect: { id: users.find((user) => user.firstName === 'admin').id },
      },
    },
  },
]

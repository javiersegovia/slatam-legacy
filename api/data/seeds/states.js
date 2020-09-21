module.exports = ({ countries }) => [
  {
    data: {
      name: 'Barinas',
      country: {
        connect: {
          id: countries.find((country) => country.name === 'Venezuela').id,
        },
      },
    },
  },
]

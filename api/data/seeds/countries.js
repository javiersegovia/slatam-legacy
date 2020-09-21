module.exports = ({ subregions }) => [
  {
    data: {
      name: 'Venezuela',
      flag: 'https://restcountries.eu/data/ven.svg',
      capital: 'Caracas',
      subregion: {
        connect: {
          id: subregions.find((sregion) => sregion.name === 'South America').id,
        },
      },
      code2: 'VE',
      phoneCode: '+58',
    },
  },
]

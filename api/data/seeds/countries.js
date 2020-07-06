const companySeeds = require('./companies')

module.exports = {
  Country: [
    {
      name: 'Venezuela',
      flag: 'https://restcountries.eu/data/ven.svg',
      capital: 'Caracas',
      subregion: { where: { name: 'South America' } },
      code2: 'VE',
      phoneCode: '+58',
    },
  ],
}

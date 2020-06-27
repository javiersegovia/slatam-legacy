const companySeeds = require('./companies')

module.exports = {
  Country: [
    {
      name: 'Venezuela',
      subregion: { where: { name: 'South America' } },
    },
  ],
}

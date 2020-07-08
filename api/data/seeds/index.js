const companySeeds = require('./companies')
const companyInfoSeeds = require('./companiesInfo')
const userSeeds = require('./users')
const productSeeds = require('./products')
const priceRangeSeeds = require('./priceRanges')
const regionSeeds = require('./regions')
const subregionSeeds = require('./subregions')
const countrySeeds = require('./countries')
const stateSeeds = require('./states')
const languageSeeds = require('./languages')
const companiesInfo = require('./companiesInfo')

module.exports = Object.assign(
  userSeeds,
  companySeeds,
  companyInfoSeeds,
  productSeeds,
  priceRangeSeeds,
  stateSeeds,
  countrySeeds,
  subregionSeeds,
  regionSeeds,
  languageSeeds
)

const companySeeds = require('./companies')
const companyInfoSeeds = require('./companiesInfo')
const categorySeeds = require('./categories')
const subcategorySeeds = require('./subcategories')
const userSeeds = require('./users')
const productSeeds = require('./products')
const priceRangeSeeds = require('./priceRanges')
const regionSeeds = require('./regions')
const subregionSeeds = require('./subregions')
const countrySeeds = require('./countries')
const stateSeeds = require('./states')
const languageSeeds = require('./languages')

module.exports = Object.assign(
  userSeeds,
  companySeeds,
  companyInfoSeeds,
  categorySeeds,
  subcategorySeeds,
  productSeeds,
  priceRangeSeeds,
  stateSeeds,
  countrySeeds,
  subregionSeeds,
  regionSeeds,
  languageSeeds
)

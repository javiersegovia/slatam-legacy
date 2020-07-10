const userSeeds = require('./users')
const companySeeds = require('./companies')
const companyInfoSeeds = require('./companiesInfo')
const categorySeeds = require('./categories')
const subcategorySeeds = require('./subcategories')
const productSeeds = require('./products')
const productPriceRangeSeeds = require('./productPriceRanges')
const productQuickDetailsSeeds = require('./productQuickDetails')
const productLogisticsSeeds = require('./productLogistics')
const productIncoTermSeeds = require('./productIncoTerms')
const productLeadTimeSeeds = require('./productLeadTime')
const productLocationSeeds = require('./productLocation')
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
  productPriceRangeSeeds,
  productQuickDetailsSeeds,
  productLogisticsSeeds,
  productIncoTermSeeds,
  productLeadTimeSeeds,
  productLocationSeeds,
  regionSeeds,
  subregionSeeds,
  countrySeeds,
  stateSeeds,
  languageSeeds
)

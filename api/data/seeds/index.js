const userSeeds = require('./users')
const userRatingSeeds = require('./userRatings')
const companySeeds = require('./companies')
const companyRatingSeeds = require('./companyRatings')
const companyInfoSeeds = require('./companiesInfo')
const categorySeeds = require('./categories')
const subcategorySeeds = require('./subcategories')
const productSeeds = require('./products')
const productRatingSeeds = require('./productRatings')
const productReviewSeeds = require('./productReviews')
const productPriceRangeSeeds = require('./productPriceRanges')
const productQuickDetailsSeeds = require('./productQuickDetails')
const productUnitTypeSeeds = require('./productUnitType')
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
  userRatingSeeds,
  companySeeds,
  companyRatingSeeds,
  companyInfoSeeds,
  categorySeeds,
  subcategorySeeds,
  productSeeds,
  productRatingSeeds,
  productReviewSeeds,
  productPriceRangeSeeds,
  productQuickDetailsSeeds,
  productUnitTypeSeeds,
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

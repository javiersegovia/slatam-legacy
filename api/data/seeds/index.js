const userSeeds = require('./users')
const userInfoSeeds = require('./usersInfo')
const userLocationSeeds = require('./userLocations')
const userRatingSeeds = require('./userRatings')
const userVerificationSeeds = require('./userVerifications')
const companySeeds = require('./companies')
const companyRatingSeeds = require('./companyRatings')
const companyInfoSeeds = require('./companiesInfo')
const companyLocationSeeds = require('./companyLocations')
const categorySeeds = require('./categories')
const subcategorySeeds = require('./subcategories')
const SellerReviewSeeds = require('./sellerReviews')
const BuyerReviewSeeds = require('./buyerReviews')

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
const productQuestionSeeds = require('./productQuestions')
const productAnswerSeeds = require('./productAnswers')
const shoppingCartSeeds = require('./shoppingCarts')
const shoppingCartProductSeeds = require('./shoppingCartProducts')
const orderSeeds = require('./order')
const orderProductSeeds = require('./orderProducts')

const regionSeeds = require('./regions')
const subregionSeeds = require('./subregions')
const countrySeeds = require('./countries')
const stateSeeds = require('./states')
const languageSeeds = require('./languages')

module.exports = Object.assign(
  userSeeds,
  userInfoSeeds,
  userLocationSeeds,
  userRatingSeeds,
  userVerificationSeeds,
  companySeeds,
  companyRatingSeeds,
  companyInfoSeeds,
  companyLocationSeeds,
  categorySeeds,
  subcategorySeeds,
  SellerReviewSeeds,
  BuyerReviewSeeds,
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
  productQuestionSeeds,
  productAnswerSeeds,
  shoppingCartSeeds,
  shoppingCartProductSeeds,
  orderSeeds,
  orderProductSeeds,
  regionSeeds,
  subregionSeeds,
  countrySeeds,
  stateSeeds,
  languageSeeds
)

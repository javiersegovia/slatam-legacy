const { createItems } = require('@keystonejs/server-side-graphql-client')

const usersSeeds = require('./users')
const userInfoSeeds = require('./usersInfo')
const userLocationSeeds = require('./userLocations')

// const userRatingSeeds = require('./userRatings')
// const userVerificationSeeds = require('./userVerifications')
// const companySeeds = require('./companies')
// const companyRatingSeeds = require('./companyRatings')
// const companyInfoSeeds = require('./companiesInfo')
// const companyLocationSeeds = require('./companyLocations')
// const categorySeeds = require('./categories')
// const subcategorySeeds = require('./subcategories')
// const sellerReviewSeeds = require('./sellerReviews')
// const buyerReviewSeeds = require('./buyerReviews')

// const productSeeds = require('./products')
// const productRatingSeeds = require('./productRatings')
// const productReviewSeeds = require('./productReviews')
// const productPriceRangeSeeds = require('./productPriceRanges')
// const productQuickDetailsSeeds = require('./productQuickDetails')
// const productUnitTypeSeeds = require('./productUnitType')
// const productLogisticsSeeds = require('./productLogistics')
// const productIncoTermSeeds = require('./productIncoTerms')
// const productLeadTimeSeeds = require('./productLeadTime')
// const productLocationSeeds = require('./productLocation')
// const productQuestionSeeds = require('./productQuestions')
// const productAnswerSeeds = require('./productAnswers')
// const shoppingCartSeeds = require('./shoppingCarts')
// const shoppingCartProductSeeds = require('./shoppingCartProducts')
// const orderSeeds = require('./order')
// const orderProductSeeds = require('./orderProducts')

const regionSeeds = require('./regions')
const subregionSeeds = require('./subregions')
const countrySeeds = require('./countries')
const stateSeeds = require('./states')
const languageSeeds = require('./languages')

module.exports = async (keystone) => {
  const users = await createItems({
    keystone,
    listKey: 'User',
    items: usersSeeds(),
    returnFields: 'id, firstName',
  })

  const languages = await createItems({
    keystone,
    listKey: 'Language',
    items: languageSeeds(),
    returnFields: 'id, name',
  })

  const regions = await createItems({
    keystone,
    listKey: 'Region',
    items: regionSeeds(),
    returnFields: 'id, name',
  })

  const subregions = await createItems({
    keystone,
    listKey: 'Subregion',
    items: subregionSeeds({ regions }),
    returnFields: 'id, name',
  })

  const countries = await createItems({
    keystone,
    listKey: 'Country',
    items: countrySeeds({ subregions }),
    returnFields: 'id, name',
  })

  const states = await createItems({
    keystone,
    listKey: 'State',
    items: stateSeeds({ countries }),
    returnFields: 'id, name',
  })

  const userInfos = await createItems({
    keystone,
    listKey: 'UserInfo',
    items: userInfoSeeds({ users, languages }),
    returnFields: 'id, name',
  })

  const userLocations = await createItems({
    keystone,
    listKey: 'UserLocation',
    items: userInfoSeeds({ users, states }),
    // returnFields: 'id, name',
  })
}
// { listKey: 'User', items: users },
// userInfoSeeds,
// userLocationSeeds,
// userRatingSeeds,
// userVerificationSeeds,
// companySeeds,
// companyRatingSeeds,
// companyInfoSeeds,
// companyLocationSeeds,
// categorySeeds,
// subcategorySeeds,
// sellerReviewSeeds,
// buyerReviewSeeds,
// productSeeds,
// productRatingSeeds,
// productReviewSeeds,
// productPriceRangeSeeds,
// productQuickDetailsSeeds,
// productUnitTypeSeeds,
// productLogisticsSeeds,
// productIncoTermSeeds,
// productLeadTimeSeeds,
// productLocationSeeds,
// productQuestionSeeds,
// productAnswerSeeds,
// shoppingCartSeeds,
// shoppingCartProductSeeds,
// orderSeeds,
// orderProductSeeds,
// regionSeeds,
// subregionSeeds,
// countrySeeds,
// stateSeeds,
// languageSeeds

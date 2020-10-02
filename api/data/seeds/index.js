const { getItems, createItem, createItems } = require('@keystonejs/server-side-graphql-client')

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

module.exports = async (keystone, isDev) => {

  if (isDev) {
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
  
    await createItems({
      keystone,
      listKey: 'UserInfo',
      items: userInfoSeeds({ users, languages }),
      // returnFields: 'id, name',
    })
  
    await createItems({
      keystone,
      listKey: 'UserLocation',
      items: userLocationSeeds({ users, states }),
      // returnFields: 'id, name',
    })
  } else {
    const [adminUser] = await getItems({
      keystone,
      listKey: 'User',
      returnFields: 'name',
      where: {
        email: process.env.ADMIN_EMAIL
      }
    })

    if (!adminUser) {
      await createItem({
        keystone,
        listKey: 'User',
        item: {
          name: 'Admin',
          email: process.env.ADMIN_EMAIL,
          password: process.env.ADMIN_PASSWORD,
        },
        // returnFields: 'id',
      })
    }

  }

  // NOTA: Si no se necesita utilizar la data de la seed (para ser usada en otra seed, por ejemplo) entonces
  // no es necesario agregar el field de "returnFields", y tampoco es necesario asignar una variable a la función,
  // sino sencillamente llamarla con un await por delante.
}

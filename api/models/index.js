const User = require('./User')
const UserInfo = require('./UserInfo')
const UserLocation = require('./UserLocation')
const UserRating = require('./UserRating')
const UserVerification = require('./UserVerification')
const Company = require('./Company')
const CompanyRating = require('./CompanyRating')
const CompanyInfo = require('./CompanyInfo')
const CompanyLocation = require('./CompanyLocation')
const Category = require('./Category')
const Subcategory = require('./Subcategory')
const SellerReview = require('./SellerReview')
const BuyerReview = require('./BuyerReview')

const Product = require('./Product')
const ProductLogistic = require('./ProductLogistic')
const ProductIncoTerm = require('./ProductIncoTerm')
const ProductLeadTime = require('./ProductLeadTime')
const ProductLocation = require('./ProductLocation')
const ProductPriceRange = require('./ProductPriceRange')
const ProductQuickDetail = require('./ProductQuickDetail')
const ProductUnitType = require('./ProductUnitType')
const ProductReview = require('./ProductReview')
const ProductRating = require('./ProductRating')
const ProductQuestion = require('./ProductQuestion')
const ProductAnswer = require('./ProductAnswer')
const ShoppingCart = require('./ShoppingCart')
const ShoppingCartProduct = require('./ShoppingCartProduct')
const Order = require('./Order')
const OrderProduct = require('./OrderProduct')
const ProductImage = require('./ProductImage')

const Region = require('./Region')
const Subregion = require('./Subregion')
const Country = require('./Country')
const State = require('./State')
const Language = require('./Language')

const Post = require('./Post')
const Comment = require('./Comment')

module.exports = [
  ['User', User],
  ['UserInfo', UserInfo],
  ['UserLocation', UserLocation],
  ['UserRating', UserRating],
  ['UserVerification', UserVerification],
  ['Company', Company],
  ['CompanyRating', CompanyRating],
  ['CompanyInfo', CompanyInfo],
  ['CompanyLocation', CompanyLocation],
  ['Category', Category],
  ['Subcategory', Subcategory],
  ['SellerReview', SellerReview],
  ['BuyerReview', BuyerReview],
  ['Product', Product],
  ['ProductLogistic', ProductLogistic],
  ['ProductIncoTerm', ProductIncoTerm],
  ['ProductLeadTime', ProductLeadTime],
  ['ProductLocation', ProductLocation],
  ['ProductPriceRange', ProductPriceRange],
  ['ProductQuickDetail', ProductQuickDetail],
  ['ProductUnitType', ProductUnitType],
  ['ProductReview', ProductReview],
  ['ProductRating', ProductRating],
  ['ProductQuestion', ProductQuestion],
  ['ProductAnswer', ProductAnswer],
  ['ShoppingCart', ShoppingCart],
  ['ShoppingCartProduct', ShoppingCartProduct],
  ['Order', Order],
  ['OrderProduct', OrderProduct],
  ['Region', Region],
  ['Subregion', Subregion],
  ['Country', Country],
  ['State', State],
  ['Language', Language],
  // ['Post', Post],
  // ['Comment', Comment],
  // ['ProductImage', ProductImage],
  // ['ProductReview', ProductReview],
  // ['ProductRating', ProductRating],
]

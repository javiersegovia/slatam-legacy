const User = require('./User')
const Company = require('./Company')
const CompanyInfo = require('./CompanyInfo')
const Category = require('./Category')
const Subcategory = require('./Subcategory')

const Product = require('./Product')
const ProductLogistic = require('./ProductLogistic')
const ProductLeadTime = require('./ProductLeadTime')
const ProductLocation = require('./ProductLocation')
const ProductPriceRange = require('./ProductPriceRange')
const ProductQuickDetail = require('./ProductQuickDetail')
const ProductImage = require('./ProductImage')
const ProductReview = require('./ProductReview')
const ProductRating = require('./ProductRating')

const Region = require('./Region')
const Subregion = require('./Subregion')
const Country = require('./Country')
const State = require('./State')
const Language = require('./Language')

const Post = require('./Post')
const Comment = require('./Comment')

module.exports = [
  ['User', User],
  ['Company', Company],
  ['CompanyInfo', CompanyInfo],
  ['Category', Category],
  ['Subcategory', Subcategory],
  ['Product', Product],
  ['ProductLogistic', ProductLogistic],
  ['ProductLeadTime', ProductLeadTime],
  ['ProductLocation', ProductLocation],
  ['ProductPriceRange', ProductPriceRange],
  ['ProductQuickDetail', ProductQuickDetail],
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

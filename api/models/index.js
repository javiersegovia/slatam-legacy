const User = require('./User')
const Company = require('./Company')

const Product = require('./Product')
const ProductLogistic = require('./ProductLogistic')
const ProductLocation = require('./ProductLocation')
const ProductPriceRange = require('./ProductPriceRange')
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
  ['Product', Product],
  ['ProductLogistic', ProductLogistic],
  ['ProductLocation', ProductLocation],
  ['Region', Region],
  ['Subregion', Subregion],
  ['Country', Country],
  ['State', State],
  ['Language', Language],
  ['ProductPriceRange', ProductPriceRange],
  // ['Post', Post],
  // ['Comment', Comment],
  // ['ProductImage', ProductImage],
  // ['ProductReview', ProductReview],
  // ['ProductRating', ProductRating],
]

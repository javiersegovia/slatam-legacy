const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')
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
const City = require('./City')

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
  ['City', City],

  // ['Post', Post],
  // ['Comment', Comment],
  ['ProductPriceRange', ProductPriceRange],
  // ['ProductImage', ProductImage],
  // ['ProductReview', ProductReview],
  // ['ProductRating', ProductRating],
]

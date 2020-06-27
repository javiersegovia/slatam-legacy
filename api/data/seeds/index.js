const companySeeds = require('./companies')
const userSeeds = require('./users')
const productSeeds = require('./products')
const regionSeeds = require('./regions')
const subregionSeeds = require('./subregions')
const countrySeeds = require('./countries')
const stateSeeds = require('./states')
const citySeeds = require('./cities')

module.exports = Object.assign(
  userSeeds,
  companySeeds,
  productSeeds,
  citySeeds,
  stateSeeds,
  countrySeeds,
  subregionSeeds,
  regionSeeds
)

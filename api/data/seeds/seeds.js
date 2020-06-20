const userSeeds = {
  User: [
    {
      firstName: 'admin',
      email: 'admin@slatam.com',
      password: '12345678',
      permission: 'ADMIN',
      role: 'SELLER',
      companyMember: { where: { name: 'Slatam Group' } },
    },
    {
      firstName: 'user',
      email: 'user@slatam.com',
      password: '12345678',
      permission: 'USER',
      role: 'SELLER',
      companyMember: { where: { name: 'Slatam Group' } },
    },
    {
      firstName: 'user2',
      email: 'user2@slatam.com',
      password: '12345678',
      permission: 'USER',
      role: 'BUYER',
    },
  ],
}

const companySeeds = {
  Company: [
    {
      name: 'Slatam Group',
      role: 'SUPPLIER',
      belongsTo: { where: { firstName: 'admin' } },
    },
  ],
}

const productSeeds = {
  Product: [
    {
      title: 'Test product',
      description: 'This is a product description',
      belongsTo: { where: { name: 'Slatam Group' } },
    },
  ],
}

const regionSeeds = {
  Region: [
    {
      name: 'America',
    },
  ],
}

const subregionSeeds = {
  Subregion: [
    {
      name: 'South America',
      region: { where: { name: 'America' } },
    },
  ],
}

const countrySeeds = {
  Country: [
    {
      name: 'Venezuela',
      subregion: { where: { name: 'South America' } },
    },
  ],
}

const stateSeeds = {
  State: [
    {
      name: 'Barinas',
      country: { where: { name: 'Venezuela' } },
    },
  ],
}

const citySeeds = {
  City: [
    {
      name: 'Barinas',
      state: { where: { name: 'Barinas' } },
    },
  ],
}

const seeds = Object.assign(
  userSeeds,
  companySeeds,
  productSeeds,
  citySeeds,
  stateSeeds,
  countrySeeds,
  subregionSeeds,
  regionSeeds
)

module.exports = seeds

const userSeeds = {
  User: [
    {
      firstName: 'admin',
      email: 'admin@slatam.com',
      password: '12345678',
      permission: 'ADMIN',
      company: { where: { name: 'Slatam Group' } },
      member: { where: { name: 'Slatam Group' } },
    },
    {
      firstName: 'user',
      email: 'user@slatam.com',
      password: '12345678',
      permission: 'USER',
      member: { where: { name: 'Slatam Group' } },
    },
    {
      firstName: 'user2',
      email: 'user2@slatam.com',
      password: '12345678',
      permission: 'USER',
    },
  ],
}

const companySeeds = {
  Company: [
    {
      name: 'Slatam Group',
      role: 'Supplier',
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

const seeds = Object.assign(userSeeds, companySeeds, productSeeds)

module.exports = seeds

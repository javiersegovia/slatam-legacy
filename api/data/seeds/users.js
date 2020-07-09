module.exports = {
  User: [
    {
      firstName: 'admin',
      email: 'admin@slatam.com',
      password: '12345678',
      permission: 'ADMIN',
      role: 'SELLER',
      company: { where: { name: 'Slatam Group' } },
    },
    {
      firstName: 'mod',
      email: 'mod@slatam.com',
      password: '12345678',
      permission: 'MOD',
      role: 'SELLER',
      company: { where: { name: 'Slatam Group' } },
    },
    {
      firstName: 'user',
      email: 'user@slatam.com',
      password: '12345678',
      permission: 'USER',
      role: 'SELLER',
      company: { where: { name: 'Slatam Group' } },
    },
    {
      firstName: 'user2',
      email: 'user2@slatam.com',
      password: '12345678',
      permission: 'USER',
      role: 'BUYER',
      company: { where: { name: 'Foro Indie' } },
    },
  ],
}

const utcDate = new Date(Date.now())

module.exports = () => [
  {
    data: {
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@slatam.com',
      password: '12345678',
      permission: 'ADMIN',
      // role: 'SELLER',
      // company: { where: { name: 'Slatam Group' } },
      // lastSeen: utcDate,
      // status: 'VISIBLE',
    },
  },
  {
    data: {
      firstName: 'mod',
      email: 'mod@slatam.com',
      password: '12345678',
      permission: 'MOD',
      // role: 'SELLER',
      // lastSeen: utcDate,
      // status: 'VISIBLE',
    },
  },
  {
    data: {
      firstName: 'user',
      email: 'user@slatam.com',
      password: '12345678',
      permission: 'USER',
      // role: 'SELLER',
      // company: { where: { name: 'Slatam Group' } },
      // lastSeen: utcDate,
      // status: 'VISIBLE',
    },
  },
  {
    data: {
      firstName: 'user2',
      email: 'user2@slatam.com',
      password: '12345678',
      permission: 'USER',
      // role: 'BUYER',
      // company: { where: { name: 'Foro Indie' } },
      // lastSeen: utcDate,
      // status: 'VISIBLE',
    },
  },
  {
    data: {
      firstName: 'user3',
      email: 'user3@slatam.com',
      password: '12345678',
      permission: 'USER',
      // role: 'BUYER',
      // lastSeen: utcDate,
      // status: 'VISIBLE',
    },
  },
]

const { Text, Select, Password, Relationship } = require('@keystonejs/fields')
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAdmin,
  userIsMod,
  userIsTargetUser,
} = require('../lib/access-control')

module.exports = {
  fields: {
    firstName: {
      schemaDoc: 'The firstname of the user',
      type: Text,
      access: {
        update: userIsTargetUser,
      },
    },
    lastName: {
      schemaDoc: 'The lastname of the user',
      type: Text,
      access: {
        update: userIsTargetUser,
      },
    },
    email: {
      schemaDoc: 'The email of the user',
      type: Text,
      isUnique: true,
      isRequired: true,
      access: {
        update: userIsTargetUser,
      },
    },
    password: {
      schemaDoc: 'The password of the user',
      type: Password,
      isRequired: true,
      access: {
        read: userIsAdmin,
        update: userIsTargetUser,
      },
    },
    permission: {
      schemaDoc: 'The level of permission the user has',
      type: Select,
      defaultValue: 'USER',
      options: ['ADMIN', 'MOD', 'USER'],
      isRequired: true,
      access: {
        read: userIsAdmin,
        update: userIsAdmin,
      },
    },
    company: {
      // [TODO]
      // 1. put his company as a default member
      schemaDoc: 'The user is member of this company',
      type: Relationship,
      ref: 'Company.members',
      access: {
        update: userIsTargetUser,
      },
    },
    role: {
      type: Select,
      defaultValue: 'BUYER',
      options: ['BUYER', 'SELLER', 'MIXED'],
      isRequired: true,
      access: {
        update: userIsTargetUser,
      },
    },
    shoppingCart: {
      schemaDoc: 'The shopping cart of the user',
      type: Relationship,
      ref: 'ShoppingCart.belongsTo',
    },
    orders: {
      schemaDoc: 'The orders of the user',
      type: Relationship,
      ref: 'Order.belongsTo',
      many: true,
    },
    rating: {
      schemaDoc: 'The buyer rating of the user',
      type: Relationship,
      ref: 'UserRating.belongsTo',
      isRequired: true,
    },
    lastSeen: {
      schemaDoc: 'The last time the user logs in',
      type: DateTimeUtc,
    },
    status: {
      type: Select,
      defaultValue: 'VISIBLE',
      options: ['VISIBLE', 'HIDDEN'],
      isRequired: true,
    },
    info: {
      type: Relationship,
      ref: 'UserInfo.belongsTo',
      isRequired: true,
    },
    // verification: {
    //   type: Relationship,
    //   ref: 'UserVerification',
    //   isRequired: true
    // },
  },
  access: {
    read: true,
    create: true,
    delete: userIsMod,
    auth: true,
  },
  plugins: [atTracking(), byTracking()],
}

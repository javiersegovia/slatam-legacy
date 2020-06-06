const { Text, Select, Password, Relationship } = require('@keystonejs/fields')
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAdminOrBelongsTo,
  userIsAdmin,
  userIsAdminOrMod,
  userIsAdminOrCanEditHimself,
} = require('../lib/access-control')

module.exports = {
  fields: {
    firstName: {
      schemaDoc: 'The firstname of the user',
      type: Text,
      access: {
        update: userIsAdminOrCanEditHimself,
      },
    },
    lastName: {
      schemaDoc: 'The lastname of the user',
      type: Text,
      access: {
        update: userIsAdminOrCanEditHimself,
      },
    },
    email: {
      schemaDoc: 'The email of the user',
      type: Text,
      isUnique: true,
    },
    password: {
      schemaDoc: 'The password of the user',
      type: Password,
      isRequired: true,
      access: {
        read: userIsAdmin,
        update: userIsAdminOrBelongsTo,
      },
    },
    permission: {
      schemaDoc: 'The level of permission the user has',
      type: Select,
      defaultValue: 'USER',
      // [TODO]
      // 1. defaultValue doesnt work
      options: ['ADMIN', 'MOD', 'USER'],
      isRequired: true,
      access: {
        read: userIsAdmin,
        update: userIsAdmin,
      },
    },
    company: {
      schemaDoc: 'The company of the user',
      type: Relationship,
      ref: 'Company.belongsTo',
    },
    member: {
      // [TODO]
      // 1. put his company as a default member
      schemaDoc: 'The user is member of this company',
      type: Relationship,
      ref: 'Company.members',
    },
    // role: {
    //   type: Select,
    //   defaultValue: 'BUYER',
    //   options: ['BUYER', 'SELLER', 'BOTH'],
    // },
    // rating: {
    //   type: Relationship,
    //   ref: 'UserRating'
    // },
    // lastSeen: {
    //   type: DateTimeUtc
    // },
    // status: {
    //   type: Select,
    //   defaultValue: 'VISIBLE',
    //   options: ['VISIBLE', 'HIDDEN']
    // },
    // info: {
    //   type: Relationship,
    //   ref: 'UserInfo',
    //   isRequired: true
    // },
    // verification: {
    //   type: Relationship,
    //   ref: 'UserVerification',
    //   isRequired: true
    // },
  },
  access: {
    create: true,
    // delete: userIsAdminOrMod,
    auth: true,
  },
  plugins: [atTracking(), byTracking()],
}

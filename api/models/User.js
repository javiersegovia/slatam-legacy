const { Text, Select, Password, Relationship } = require('@keystonejs/fields')
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAdmin,
  userIsMod,
  userCanUpdateHimself,
} = require('../lib/access-control')

module.exports = {
  fields: {
    firstName: {
      schemaDoc: 'The firstname of the user',
      type: Text,
      isRequired: true,
      access: {
        update: userCanUpdateHimself,
      },
    },
    // lastName: {
    //   schemaDoc: 'The lastname of the user',
    //   type: Text,
    //   isRequired: true,
    //   access: {
    //     update: userCanUpdateHimself,
    //   },
    // },
    email: {
      schemaDoc: 'The email of the user',
      type: Text,
      isUnique: true,
      isRequired: true,
      access: {
        update: userCanUpdateHimself,
      },
    },
    password: {
      schemaDoc: 'The password of the user',
      type: Password,
      isRequired: true,
      access: {
        read: userIsAdmin,
        update: userCanUpdateHimself,
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
    companyMember: {
      // [TODO]
      // 1. put his company as a default member
      schemaDoc: 'The user is member of this company',
      type: Relationship,
      ref: 'Company.members',
      access: {
        update: userCanUpdateHimself,
      },
    },
    role: {
      type: Select,
      defaultValue: 'BUYER',
      options: ['BUYER', 'SELLER', 'BOTH'],
      isRequired: true,
      access: {
        update: userCanUpdateHimself,
      },
    },
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
    read: true,
    create: true,
    delete: userIsMod,
    auth: true,
  },
  plugins: [atTracking(), byTracking()],
}

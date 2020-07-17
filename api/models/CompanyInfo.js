const { Text, Relationship, Select, Integer } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAdminOrMod,
  userIsCompanyOwner,
  userIsCompanyAgent,
  userIsCompanyMember,
} = require('../lib/access-control')
const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

module.exports = {
  fields: {
    foundedAt: {
      schemaDoc: 'The year in which the company has been founded',
      type: Integer,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    languages: {
      schemaDoc: 'The languages ​​spoken by the company',
      type: Relationship,
      ref: 'Language',
      many: true,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    description: {
      schemaDoc: 'The description of the company',
      type: Text,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    employeesRange: {
      schemaDoc: "The employees's number of the company",
      type: Select,
      options: [
        'BETWEEN 1 AND 9',
        'BETWEEN 10 AND 19',
        'BETWEEN 20 AND 49',
        'BETWEEN 50 AND 99',
        'BETWEEN 100 AND 199',
        'MORE THAN 200',
      ],
      dataType: 'string',
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    phone: {
      schemaDoc: 'The phone number of the company',
      type: Text,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    postalCode: {
      schemaDoc: 'The postal code of the company',
      type: Text,
      access: {
        update: (payload) =>
          userIsCompanyAgent(payload) || userIsAdminOrMod(payload),
      },
    },
    location: {
      schemaDoc: 'The location of the company',
      type: Relationship,
      ref: 'CompanyLocation.belongsTo',
      access: {
        update: userIsAdminOrMod,
      },
    },
    belongsTo: {
      schemaDoc: 'The company who belongs this info',
      type: Relationship,
      ref: 'Company.info',
      access: {
        update: userIsAdminOrMod,
      },
    },
    owner: {
      schemaDoc: 'The owner of the company',
      type: Relationship,
      ref: 'User',
      access: {
        update: userIsAdminOrMod,
      },
    },
    members: {
      schemaDoc: 'The members of the company',
      type: Relationship,
      ref: 'User',
      many: true,
      access: {
        update: (payload) =>
          userIsCompanyOwner(payload) || userIsAdminOrMod(payload),
      },
    },
  },
  hooks: {
    resolveInput: ({ resolvedData, operation, context }) => {
      // When a new company info is created, this happens
      if (operation === 'create') {
        const payload = {
          authentication: {
            item: context.authedItem,
          },
        }
        // check if the user has a company or is admin/mod
        if (!userIsCompanyMember(payload) && !userIsAdminOrMod(payload)) {
          throwAccessDenied(null, context)
        }
        // TODO: query the company and add the owner field into this owner field
        // TODO: query the company and add the members from the queried company
        // Temporarily: add the user's id to company info's owner field
        resolvedData.owner = context.authedItem.id
        // add the user company id to company info's belongs to field
        resolvedData.belongsTo = context.authedItem.company
        // reset the location in case the user adds a location id when creating a company info
        resolvedData.location = null
        // Temporarily for testing: create an array for members and reset the array if the owner adds a member
        resolvedData.members = []
        // Temporarily for testing: add the owner in the members array
        resolvedData.members.push(context.authedItem.id)
        return resolvedData
      }
      // TODO: delete this table if no info is left
      return resolvedData
    },
  },
  access: {
    read: true,
    delete: userIsAdminOrMod,
  },
  plugins: [atTracking(), byTracking()],
}

const { Relationship } = require('@keystonejs/fields')
const { Markdown } = require('@keystonejs/fields-markdown')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const {
  userIsAdminOrMod,
  userIsCompanyMember,
} = require('../lib/access-control')

module.exports = {
  fields: {
    author: {
      schemaDoc: 'The user who wrote the answer',
      type: Relationship,
      ref: 'User',
      access: {
        update: userIsAdminOrMod,
      },
    },
    authorAssociatedCompany: {
      schemaDoc: 'The company of the user',
      type: Relationship,
      ref: 'Company',
      access: {
        update: userIsAdminOrMod,
      },
    },
    description: {
      schemaDoc: 'The answer itself',
      type: Markdown,
      isRequired: true,
      access: {
        update: (payload) =>
          userIsProductOwner(payload) || userIsAdminOrMod(payload),
      },
    },
    belongsTo: {
      schemaDoc: 'The question of the answer',
      type: Relationship,
      ref: 'ProductQuestion.answer',
      access: {
        update: userIsAdminOrMod,
      },
    },
    owner: {
      schemaDoc: 'The company that owns the product',
      type: Relationship,
      ref: 'Company',
      access: {
        update: userIsAdminOrMod,
      },
    },
  },
  resolveInput: ({ resolvedData, operation, context }) => {
    // When a new product answer is created, this happens
    // TODO: query the product to validate that the product owner id is the same to the user company id
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
      // add the user's company id to product answer owner
      resolvedData.owner = context.authedItem.company

      return resolvedData
    }
    return resolvedData
  },
  access: {
    read: true,
    delete: userIsAdminOrMod,
  },
  plugins: [atTracking(), byTracking()],
}

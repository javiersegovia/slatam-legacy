const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdmin } = require('../lib/access-control')

module.exports = {
    fields: {
        name: {
            schemaDoc: 'The name of the subregion',
            type: Text,
            isUnique: true,
            isRequired: true,
        },
        region: {
            schemaDoc: 'The region who the subregion belongs',
            type: Relationship,
            ref: 'Region',
            isRequired: true
        },
        countries: {
            schemaDoc: 'The countries that has the subregion',
            type: Relationship,
            ref: 'Country',
            isRequired: true,
            many: true
        }
    },
    access: {
        create: userIsAdmin,
        read: true,
        update: userIsAdmin,
        delete: userIsAdmin,
      },
    plugins: [atTracking(), byTracking()],
}
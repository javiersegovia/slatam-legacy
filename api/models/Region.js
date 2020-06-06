const { Text, Relationship } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdmin } = require('../lib/access-control')

module.exports = {
    fields: {
        name: {
            schemaDoc: 'The name of the region',
            type: Text,
            isUnique: true,
            isRequired: true
        },
        subregions: {
            schemaDoc: 'The subregions that the region has',
            type: Relationship,
            ref: 'Subregion',
            isRequired: true,
            many: true
        },
        countries: {
            schemaDoc: 'The countries that the region has',
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
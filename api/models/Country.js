const { Text, Relationship, Url } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAdmin } = require('../lib/access-control')

module.exports = {
    fields: {
        name: {
            schemaDoc: 'The name of the country',
            type: Text,
            isUnique: true,
            isRequired: true
        },
        flag: {
            schemaDoc: 'The flag url of the country',
            type: Url,
            isUnique: true,
            isRequired: true
        },
        capital: {
            schemaDoc: 'The capital of the country',
            type: Text,
            isUnique,
            isRequired: true
        },
        region: {
            schemaDoc: 'The region of the country',
            type: Relationship,
            ref: 'Region',
            isRequired: true
        },
        subregion: {
            schemaDoc: 'The subregion of the country',
            type: Relationship,
            ref: 'Subregion',
            isRequired: true
        },
        code2: {
            schemaDoc: 'The acronym of the country',
            type: Text,
            isUnique: true,
            isRequired: true
        },
        phoneCode: {
            schemaDoc: 'The phone code of the country',
            type: Text,
            isUnique: true,
            isRequired: true
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
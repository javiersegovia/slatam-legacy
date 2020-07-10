const { Text, Relationship, Select, Integer } = require('@keystonejs/fields')
const { byTracking, atTracking } = require('@keystonejs/list-plugins')
const { userIsAuthenticated } = require('../lib/access-control')

module.exports = {
  fields: {
    foundedAt: {
      schemaDoc: 'The year in which the company has been founded',
      type: Integer,
    },
    languages: {
      schemaDoc: 'The languages ​​spoken by the company',
      type: Relationship,
      ref: 'Language',
      many: true,
    },
    description: {
      schemaDoc: 'The description of the company',
      type: Text,
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
    },
    phone: {
      schemaDoc: 'The phone number of the company',
      type: Text,
    },
    postalCode: {
      schemaDoc: 'The postal code of the company',
      type: Text,
    },
    state: {
      schemaDoc: 'The state who belongs the company',
      type: Relationship,
      ref: 'State',
    },
    country: {
      schemaDoc: 'The country of the company',
      type: Relationship,
      ref: 'Country',
    },
    belongsTo: {
      schemaDoc: 'The company who belongs this info',
      type: Relationship,
      ref: 'Company.info',
      isRequired: true,
    },
  },
  access: {
    create: userIsAuthenticated,
    read: true,
    // update: userIsModOrOwner,
    // delete: userIsModOrOwner,
  },
  plugins: [atTracking(), byTracking()],
}

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
        'Between 1 and 9',
        'Between 10 and 19',
        'Between 20 and 49',
        'Between 50 and 99',
        'Between 100 and 199',
        'More than 200',
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

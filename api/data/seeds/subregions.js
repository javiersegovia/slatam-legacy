module.exports = ({ regions }) => [
  {
    data: {
      name: 'South America',
      region: {
        connect: { id: regions.find((region) => region.name === 'America').id },
      },
    },
  },
]

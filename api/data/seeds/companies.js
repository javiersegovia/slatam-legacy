module.exports = {
  Company: [
    {
      name: 'Slatam Group',
      role: 'SUPPLIER',
      owner: { where: { firstName: 'admin' } },
      shipsTo: { where: { name: 'Venezuela' } },
      categories: { where: { name: 'Fabric and Textile Raw Material' } },
      subcategories: { where: { name: 'Leather' } },
    },
    {
      name: 'Foro Indie',
      role: 'SUPPLIER',
      owner: { where: { firstName: 'user2' } },
      shipsTo: { where: { name: 'Venezuela' } },
    },
  ],
}

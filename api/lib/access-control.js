const userIsAuthenticated = ({ authentication: { item } }) => !!item

const userIsAdmin = ({ authentication: { item: user } }) => {
  // console.log(user)
  return Boolean(user && user.permission === 'ADMIN')
}


const userIsMod = ({ authentication: { item: user } }) =>
  Boolean(user && ['ADMIN', 'MOD'].includes(user.permission))

// return either false if there is no user, or a graphql where clause
// const userIsOwner = ({ authentication: { item: user } }) => {
//   if (!user) return false

//   return { owner: { id: user.id } }
// }

// userIsModOrAdminOrBelongsTo is missing

const userIsAdminOrMod = (payload) => {
  const { authentication: { item } } = payload
  if (!item) return false

  const isAdmin = userIsAdmin(payload)
  const isMod = userIsMod(payload)

  return Boolean( isAdmin || isMod )
}

const userIsAdminOrCanEditHimself = (payload) => {
  const {
    authentication: { item },
    existingItem = null,
  } = payload
  if (!item) return false

  const isAdmin = userIsAdmin(payload)

  if (existingItem) {
    const userCanEdit = item.id === existingItem.id

    return Boolean( isAdmin || userCanEdit )
  }

  return { user: { id: item.id } }
}

const userIsMemberOrAdmin = (payload) => {
  console.log(payload)
  const {
    authentication: { item },
    existingItem = null,
  } = payload
  if (!item) return false

  const isAdmin = userIsAdmin(payload)

  if (existingItem) {
    const isMember = 
    // when updating a product, a user is member if the company id
    // in his member field is equal to the company id in product's 
    // belongs to field
    item.member.toString() === existingItem.belongsTo.toString() ||
    // when updating a company, a user is member if the company id 
    // in his member field is equal to the company id
    item.member.toString() === existingItem.id.toString()

    return Boolean( isAdmin || isMember )
  }

  return { user: { id: item.id } }
}

const userIsAdminOrBelongsTo = (payload) => {
  console.log(payload)
  const {
    authentication: { item },
    existingItem = null,
  } = payload
  if (!item) return false

  const isAdmin = userIsAdmin(payload)

  if (existingItem) {
    const belongsToUser =
      item.id === existingItem.id ||
      (existingItem && existingItem.belongsTo && item.id === existingItem.belongsTo)

    return Boolean(isAdmin || belongsToUser)
  }

  // TODO: test function composition so we can compose a proper graphql with
  // the correct "belongs_to" relationship field (e.g: 'user', 'company', 'owner')
  return { belongsTo: { id: item.id } }
}

const userIsModOrOwner = (payload) => {
  const {
    authentication: { item },
    existingItem = null,
  } = payload
  if (!item) return false

  const isMod = userIsMod(payload)

  if (existingItem) {
    const userIsOwner =
      item.id === existingItem.id ||
      (existingItem && existingItem.owner && item.id === existingItem.owner)

    return Boolean(isMod || userIsOwner)
  }
  // TODO: test function composition so we can compose a proper graphql with
  // the correct "belongs_to" relationship field (e.g: 'user', 'company', 'owner')
  return { owner: { id: item.id } }
}

// return either false if there is no user, or a graphql where clause
const userIsUser = ({ authentication: { item: user } }) => {
  return user && { id: user.id }
}

const userCanUpdateItem = (payload) => {
  const isOwner = userIsUser(payload)
  const isCool = ['ADMIN', 'MOD'].includes(
    payload.authentication.item.permissions
  )

  return isCool || isOwner || userIsAdminOrOwner(payload)
}

module.exports = {
  userIsAuthenticated,
  userIsAdmin,
  userIsMod,
  userIsAdminOrMod,
  userIsUser,
  userIsAdminOrCanEditHimself,
  userIsMemberOrAdmin,
  userIsModOrOwner,
  // userIsAdminOrOwner,
  userIsAdminOrBelongsTo,
  userCanUpdateItem,
}

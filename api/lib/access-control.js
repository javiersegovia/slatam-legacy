const userIsAuthenticated = ({ authentication: { item: user } }) =>
  Boolean(user)

const userIsAdmin = (payload) => {
  const {
    authentication: { item: user },
  } = payload

  const isAuth = userIsAuthenticated(payload)
  if (!isAuth) return false

  const isAdmin = user.permission === 'ADMIN'

  return Boolean(isAuth && isAdmin)
}

const userIsMod = (payload) => {
  const {
    authentication: { item: user },
  } = payload

  const isAuth = userIsAuthenticated(payload)
  if (!isAuth) return false

  const isMod = user.permission === 'MOD'

  return Boolean(isAuth && isMod)
}

const userIsAdminOrMod = (payload) =>
  Boolean(userIsAdmin(payload) || userIsMod(payload))

const userIsTargetUser = (payload) => {
  const {
    authentication: { item },
    listKey,
    existingItem = null,
  } = payload

  if (listKey !== 'User') return false

  const isAuth = userIsAuthenticated(payload)

  if (existingItem) {
    const isTargetUser = item.id === existingItem.id

    return Boolean(isTargetUser && isAuth)
  }

  return false
}

const userIsProductOwner = (payload) => {
  const {
    authentication: { item },
    listKey,
    existingItem = null,
  } = payload

  const isAuth = userIsAuthenticated(payload)
  if (!isAuth) return false

  if (
    listKey !== 'Product' &&
    listKey !== 'ProductPriceRange' &&
    listKey !== 'ProductLogistic' &&
    listKey !== 'ProductLocation' &&
    listKey !== 'ProductLeadTime' &&
    listKey !== 'ProductQuickDetail'
  )
    return false
  if (!item.company) return false
  if (!existingItem.owner) return false

  if (existingItem) {
    const isProductOwner =
      item.company.toString() === existingItem.owner.toString()

    return Boolean(isProductOwner)
  }

  return false
}

const userIsCompanyMember = ({ authentication: { item: user } }) =>
  Boolean(user.company)

module.exports = {
  userIsAuthenticated,
  userIsAdmin,
  userIsMod,
  userIsAdminOrMod,
  userIsTargetUser,
  userIsProductOwner,
  userIsCompanyMember,
}

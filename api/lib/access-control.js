const userIsAuthenticated = ({ authentication: { item: user } }) =>
  Boolean(user)

const userIsAdmin = (payload) => {
  const {
    authentication: { item: user },
  } = payload

  if (!userIsAuthenticated(payload)) return false

  const isAdmin = user.permission === 'ADMIN'

  return Boolean(isAdmin)
}

const userIsMod = (payload) => {
  const {
    authentication: { item: user },
  } = payload

  if (!userIsAuthenticated(payload)) return false

  const isMod = user.permission === 'MOD'

  return Boolean(isMod)
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

  if (!userIsAuthenticated(payload)) return false

  if (
    listKey !== 'Product' &&
    listKey !== 'ProductPriceRange' &&
    listKey !== 'ProductLogistic' &&
    listKey !== 'ProductLocation' &&
    listKey !== 'ProductLeadTime' &&
    listKey !== 'ProductQuickDetail'
  )
    return false

  if (!userIsCompanyMember(payload)) return false
  if (!existingItem.owner) return false

  if (existingItem) {
    const isProductOwner =
      item.company.toString() === existingItem.owner.toString()

    return Boolean(isProductOwner)
  }

  return false
}

const userIsCompanyMember = (payload) => {
  const {
    authentication: { item },
  } = payload

  if (!userIsAuthenticated(payload)) return false

  return Boolean(item.company)
}

module.exports = {
  userIsAuthenticated,
  userIsAdmin,
  userIsMod,
  userIsAdminOrMod,
  userIsTargetUser,
  userIsProductOwner,
  userIsCompanyMember,
}

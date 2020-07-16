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
    authentication: { item: user },
    listKey,
    existingItem: product = null,
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

  if (!product.owner) return false

  if (product) {
    const isProductOwner = user.company.toString() === product.owner.toString()

    return Boolean(isProductOwner)
  }

  return false
}

const userIsCompanyMember = (payload) => {
  const {
    authentication: { item: user },
  } = payload

  if (!userIsAuthenticated(payload)) return false

  return Boolean(user.company)
}

const userIsCompanyOwner = (payload) => {
  const {
    authentication: { item: user },
    listKey,
    existingItem: company = null,
  } = payload

  console.log(payload)

  if (!userIsAuthenticated(payload)) return false

  if (listKey !== 'Company') return false

  if (!userIsCompanyMember(payload)) return false

  if (!company.owner) return false

  if (company) {
    const isCompanyOwner = user.id.toString() === company.owner.toString()

    return Boolean(isCompanyOwner)
  }

  return false
}

const userIsCompanyAgent = (payload) => {
  const {
    authentication: { item: user },
    listKey,
    existingItem: company = null,
  } = payload

  if (listKey !== 'Company') return false

  if (!userIsCompanyMember(payload)) return false

  if (!company.owner) return false

  if (company) {
    const isCompanyAgent = user.company.toString() === company.id.toString()

    return Boolean(isCompanyAgent)
  }

  return false
}

module.exports = {
  userIsAuthenticated,
  userIsAdmin,
  userIsMod,
  userIsAdminOrMod,
  userIsTargetUser,
  userIsProductOwner,
  userIsCompanyMember,
  userIsCompanyOwner,
  userIsCompanyAgent,
}

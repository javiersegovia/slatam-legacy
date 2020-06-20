const {
  throwAccessDenied,
} = require('@keystonejs/keystone/lib/List/graphqlErrors')

const userIsAuthenticated = ({ authentication: { item: user } }) =>
  Boolean(user)

const userIsAdmin = (payload) => {
  const {
    authentication: { item: user },
  } = payload

  const isAuth = userIsAuthenticated(payload)
  const isAdmin = user.permission === 'ADMIN'

  return Boolean(isAuth && isAdmin)
}

const userIsMod = (payload) => {
  const {
    authentication: { item: user },
  } = payload

  const isAuth = userIsAuthenticated(payload)
  const isAdmin = user.permission === 'ADMIN'
  const isMod = user.permission === 'MOD'

  return Boolean((isAuth && isMod) || isAdmin)
}

const userCanUpdateHimself = (payload) => {
  const {
    authentication: { item },
    listKey,
    existingItem = null,
  } = payload

  if (listKey !== 'User') return false

  const isAuth = userIsAuthenticated(payload)
  const isAdmin = userIsAdmin(payload)
  const isMod = userIsMod(payload)

  if (existingItem) {
    const canEditHimself = item.id === existingItem.id

    return Boolean((canEditHimself && isAuth) || isMod || isAdmin)
  }

  return { user: { id: item.id } }
}

const userCanUpdateProducts = (payload) => {
  const {
    authentication: { item },
    listKey,
    operation,
    existingItem = null,
  } = payload

  if (listKey !== 'Product') return false

  if (operation === 'update') {
    item.companyMember = item.companyMember ? item.companyMember : ''

    if (existingItem) {
      const canUpdateProducts =
        item.companyMember.toString() === existingItem.belongsTo.toString()

      return Boolean(canUpdateProducts)
    }
  }
}

const userCanDeleteProducts = (payload, isAuth, isMod, isAdmin) => {
  const {
    authentication: { item, listKey: authedListKey },
    listKey,
    operation,
    existingItem = null,
  } = payload

  if (listKey !== 'Product') return false

  if (operation === 'delete') {
    item.companyMember = item.companyMember ? item.companyMember : ''

    if (existingItem) {
      const canDeleteProducts =
        item.companyMember.toString() === existingItem.belongsTo.toString()

      if (!canDeleteProducts && isAuth && !isMod && !isAdmin) {
        const context = {
          authedItem: item,
          authedListKey,
        }
        throwAccessDenied(null, context, existingItem)
      }
    }
  }
}

const userCanUpdateCompany = (payload) => {
  const {
    authentication: { item },
    listKey,
    operation,
    existingItem = null,
  } = payload

  if (listKey !== 'Company') return false

  if (operation === 'update') {
    item.companyMember = item.companyMember ? item.companyMember : ''

    if (existingItem) {
      const canUpdateCompany =
        item.companyMember.toString() === existingItem.id.toString()
      return Boolean(canUpdateCompany)
    }
  }
}

const userCanDeleteCompany = (payload, isAuth, isMod, isAdmin) => {
  const {
    authentication: { item, listKey: authedListKey },
    listKey,
    operation,
    existingItem = null,
  } = payload

  if (listKey !== 'Company') return false

  if (operation === 'delete') {
    item.companyMember = item.companyMember ? item.companyMember : ''

    if (existingItem) {
      const canDeleteCompany =
        item.companyMember.toString() === existingItem.id.toString()

      if (!canDeleteCompany && isAuth && !isMod && !isAdmin) {
        const context = {
          authedItem: item,
          authedListKey,
        }
        throwAccessDenied(null, context, existingItem)
      }
    }
  }
}

const userCanUpdateOrDeleteCompany = (payload, isAuth, isMod, isAdmin) => {
  const canUpdateCompany = userCanUpdateCompany(payload)
  const canDeleteCompany = userCanDeleteCompany(payload, isAuth, isMod, isAdmin)

  return Boolean(canUpdateCompany)
}

const userCanUpdateOrDeleteProducts = (payload, isAuth, isMod, isAdmin) => {
  const canUpdateProducts = userCanUpdateProducts(payload)
  const canDeleteProducts = userCanDeleteProducts(
    payload,
    isAuth,
    isMod,
    isAdmin
  )

  return Boolean(canUpdateProducts)
}

const userIsCompanyMember = (payload) => {
  const isAuth = userIsAuthenticated(payload)
  const isAdmin = userIsAdmin(payload)
  const isMod = userIsMod(payload)

  const canUpdateOrDeleteProducts = userCanUpdateOrDeleteProducts(
    payload,
    isAuth,
    isMod,
    isAdmin
  )

  const canUpdateOrDeleteCompany = userCanUpdateOrDeleteCompany(
    payload,
    isAuth,
    isMod,
    isAdmin
  )

  return Boolean(
    (isAuth && canUpdateOrDeleteCompany) ||
      (isAuth && canUpdateOrDeleteProducts) ||
      isMod ||
      isAdmin
  )
}

module.exports = {
  userIsAuthenticated,
  userIsAdmin,
  userIsMod,
  userCanUpdateHimself,
  userCanUpdateProducts,
  userCanUpdateCompany,
  userIsCompanyMember,
}

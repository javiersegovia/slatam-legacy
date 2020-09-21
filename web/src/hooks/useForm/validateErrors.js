import isEmail from 'validator/lib/isEmail'
import {
  NOT_EMPTY,
  MIN_CHARACTERS,
  SHOULD_MATCH_VALUE,
  VALID_EMAIL,
} from './errorTypes'

function validateErrors(props) {
  const { value, type, minValue = null, shouldMatchValue = null } = props

  const toStr = x => x && x.toString()
  const stringValue = toStr(value)
  const stringShouldMatchValue = toStr(shouldMatchValue)

  switch (type) {
    case NOT_EMPTY:
      return !stringValue

    case MIN_CHARACTERS:
      if (!stringValue) return null
      return stringValue.length < minValue

    case SHOULD_MATCH_VALUE:
      if (!stringValue || !stringShouldMatchValue) {
        return null
      }

      return stringValue !== stringShouldMatchValue

    case VALID_EMAIL:
      if (!stringValue) return null
      return !isEmail(stringValue)

    default:
      return null
  }
}

export default validateErrors

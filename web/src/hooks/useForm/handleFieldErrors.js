import validateErrors from './validateErrors'

const handleFieldErrors = props => {
  const { info, value } = props
  const { fieldName, validations, ...extra } = info

  const fieldErrors = validations.find(validation =>
    validateErrors({
      fieldName,
      value,
      ...validation,
      ...extra,
    })
  )

  return (fieldErrors && fieldErrors.errorMessage) || null
}

export default handleFieldErrors

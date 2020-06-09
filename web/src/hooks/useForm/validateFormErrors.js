import handleFieldErrors from './handleFieldErrors'

const validateFormErrors = props => (fields = null) => {
  const { errorValidations, formValues, setFormErrors } = props

  if (!fields) {
    const formErrors = {}
    Object.keys(errorValidations).map(fieldName => {
      formErrors[fieldName] = handleFieldErrors({
        info: errorValidations[fieldName],
        value: formValues[fieldName],
      })
    })

    setFormErrors(prevState => ({ ...prevState, ...formErrors }))

    const hasErrors = Object.keys(formErrors).filter(key => formErrors[key])
    return hasErrors && hasErrors.length > 0
  }

  if (Array.isArray(fields)) {
    const formErrors = {}
    fields.map(fieldName => {
      formErrors[fieldName] = handleFieldErrors({
        info: errorValidations[fieldName],
        value: formValues[fieldName],
      })
    })

    setFormErrors(prevState => ({ ...prevState, ...formErrors }))

    const hasErrors = Object.keys(formErrors).filter(key => formErrors[key])
    return hasErrors && hasErrors.length > 0
  }

  if (typeof fields === 'string') {
    const error = {
      [fields]: handleFieldErrors({
        info: errorValidations[fields],
        value: formValues[fields],
      }),
    }

    return setFormErrors(prevState => ({ ...prevState, ...error }))
  }

  throw new Error('prop "Fields" has a wrong value type')
}

export default validateFormErrors

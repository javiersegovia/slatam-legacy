import { useState } from 'react'
import validateFormErrors from './validateFormErrors'

export * from './errorTypes'

export const useForm = ({
  formValues,
  setFormValues,
  errorValidations = null,
}) => {
  const [formErrors, setFormErrors] = useState({})

  const handleFormErrors =
    errorValidations &&
    validateFormErrors({
      formValues,
      errorValidations,
      setFormErrors,
    })

  const handleUpdate = name => value => {
    setFormValues({ ...formValues, [name]: value })
  }

  return { formErrors, handleFormErrors, handleUpdate }
}

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '@@components/UI/Button'
import Input from '@@components/Forms/Input'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import {
  useForm,
  NOT_EMPTY,
  VALID_EMAIL,
  MIN_CHARACTERS,
} from '@@hooks/useForm'
import LogoSVG from '@@public/images/slatam-logo.svg'
import { StyledWrapper, StyledCard } from './styled'

const errorValidations = {
  email: {
    fieldName: 'email',
    validations: [
      {
        type: NOT_EMPTY,
        errorMessage: 'Please enter your email.',
      },
      {
        type: VALID_EMAIL,
        errorMessage: 'Please enter a valid email.',
      },
    ],
  },
  password: {
    fieldName: 'password',
    validations: [
      {
        type: NOT_EMPTY,
        errorMessage: 'Please enter a password.',
      },
      {
        type: MIN_CHARACTERS,
        errorMessage: 'Your password should have at least 6 characters.',
        minValue: 6,
      },
    ],
  },
}

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const togglePassword = () => setShowPassword(!showPassword)

  const { formErrors, handleFormErrors, handleUpdate } = useForm({
    formValues,
    setFormValues,
    errorValidations,
  })

  const onSubmit = e => {
    e.preventDefault()
    const hasErrors = handleFormErrors()

    if (!hasErrors) {
      // save info to DB here
    }
  }

  return (
    <StyledWrapper>
      <div className="Logo">
        <Link href="/">
          <a>
            <LogoSVG />
          </a>
        </Link>
      </div>
      <StyledCard>
        <h2 className="StyledCard__title">Sign in</h2>
        <form onSubmit={onSubmit} className="StyledCard__innerPadding">
          <div className="StyledCard__inner Account">
            <Input
              value={formValues.email}
              handleUpdate={handleUpdate('email')}
              type="email"
              name="email"
              id="signUp__email"
              label="Email"
              autoComplete="email"
              errors={formErrors.email || null}
              handleFormErrors={() => handleFormErrors('email')}
            />
            <Input
              value={formValues.password}
              handleUpdate={handleUpdate('password')}
              type={showPassword ? 'text' : 'password'}
              errors={formErrors.password || null}
              handleFormErrors={() => handleFormErrors('password')}
              label={
                <div className="forgotPassword">
                  Password
                  <Link href="/request-change">
                    <a>Forgot your password?</a>
                  </Link>
                </div>
              }
              icon={
                <button
                  type="button"
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </button>
              }
              iconPosition="end"
            />
          </div>
          <Button
            type="submit"
            className="StyledCard__submitButton"
            onClick={onSubmit}
            name="account"
            size="lg"
          >
            Continue
          </Button>
        </form>
        <div className="StyledCard__redirectWrapper">
          <p className="StyledCard__redirect" style={{ padding: '0 30px' }}>
            You don&lsquo;t have an account?{' '}
            <Link href="/sign-up">
              <a>Register now</a>
            </Link>
          </p>
        </div>
      </StyledCard>
    </StyledWrapper>
  )
}

SignIn.propTypes = {}

export default SignIn

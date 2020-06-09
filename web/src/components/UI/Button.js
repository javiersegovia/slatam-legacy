import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  padding: 12px 16px 13px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  letter-spacing: 0.8px;
  border-radius: 6px;
  font-weight: 500;
  display: inline-flex;
  justify-content: center;
  background: ${props => props.theme.gradients.primary.main};
  box-shadow: ${props => props.theme.bShadows.button};

  ${props =>
    props.secondary &&
    css`
      background: white;
      color: ${props.theme.palette.primary.light};
    `}

  ${props =>
    props.outlined &&
    css`
      background: white;
      color: ${props.theme.palette.primary.light};
      border: 2px solid ${props.theme.palette.primary.light};
    `}

  ${props =>
    props.size === 'lg' &&
    css`
      padding: 16px 22px 17px;
      font-size: 1.125rem;
    `}

  ${props =>
    props.color === 'default' &&
    css`
      background: ${props.theme.gradients.snow.main};
      color: ${props.theme.palette.black.main};
    `}


  ${props =>
    props.rounded &&
    css`
      border-radius: 35px;
    `}
`

const Button = ({ children, ...otherProps }) => {
  return (
    <StyledButton as={otherProps.href ? 'a' : ''} {...otherProps}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Button

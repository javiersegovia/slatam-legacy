import React, { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { StyledPrimaryLinks } from './styled'

const NavPrimaryLinks = () => {
  return (
    <StyledPrimaryLinks>
      <a>Latest stories</a>

      <a>Our Stories</a>

      <a>Regions</a>

      <a>Categories</a>

      <a>Get the latest news in your box</a>
    </StyledPrimaryLinks>
  )
}

export default NavPrimaryLinks

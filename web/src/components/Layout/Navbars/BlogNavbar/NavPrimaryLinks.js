import React from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { StyledPrimaryLinks } from './styled'

const NavPrimaryLinks = () => {
  return (
    <StyledPrimaryLinks>
      <Link href="#">
        <a>Latest stories</a>
      </Link>
      <Link href="#">
        <a>Our Stories</a>
      </Link>
      <Link href="#">
        <a>Regions</a>
      </Link>
      <Link href="#">
        <a>Categories</a>
      </Link>

      <Link href="#">
        <a>Get the latest news in your box</a>
      </Link>
    </StyledPrimaryLinks>
  )
}

export default NavPrimaryLinks

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import NavPrimaryLinks from './NavPrimaryLinks'
import NavSecundaryLinks from './NavSecundaryLinks'

import { BlogStyledNavBar, Logo, SearchBar } from './styled'

const data = 'slatam.com'

const BlogNavbar = ({ children }) => {
  // return <div>{children({ data })}</div>
  return (
    <>
      <BlogStyledNavBar>
        <Logo>
          <Link href="/">
            <a>
              <img src="/images/slatam-logo.svg" alt="Slatam Logo" />
            </a>
          </Link>
        </Logo>
        <NavPrimaryLinks />
        <SearchBar>Search Bar</SearchBar>
        <NavSecundaryLinks />
      </BlogStyledNavBar>
    </>
  )
}

BlogNavbar.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BlogNavbar

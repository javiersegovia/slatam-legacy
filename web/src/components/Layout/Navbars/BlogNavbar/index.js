import React from 'react'
import PropTypes from 'prop-types'
import NavPrimaryLinks from './NavPrimaryLinks'
import NavSecundaryLinks from './NavSecundaryLinks'
import BlogFooter from '../../Footers/BlogFooter/index'
import Home from '../../BlogHome/index'
import { BlogStyledNavBar, Logo, SearchBar } from './styled'

const data = 'slatam.com'

const BlogNavbar = ({ children }) => {
  // return <div>{children({ data })}</div>
  return (
    <>
      <BlogStyledNavBar>
        <Logo>
          <a>
            <img src="/images/slatam-logo.svg" alt="Slatam Logo" />
          </a>
        </Logo>
        <NavPrimaryLinks />
        <SearchBar>Search Bar</SearchBar>
        <NavSecundaryLinks />
      </BlogStyledNavBar>
      <Home />
      <br />
      <BlogFooter />
    </>
  )
}

BlogNavbar.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BlogNavbar

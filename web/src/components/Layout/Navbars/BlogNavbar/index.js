import React from 'react'
import PropTypes from 'prop-types'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import {
  BlogStyledNavBar,
  Logo,
  PrimaryLinks,
  SecundaryLinks,
  SearchBar,
} from './styled'

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
        <PrimaryLinks>
          <a>Latest stories</a>
          <a>Our products</a>
          <a>Regions</a>
          <a>Categories</a>
          <a>Get the latest news in your box</a>
        </PrimaryLinks>
        <SearchBar>Search Bar</SearchBar>
        <SecundaryLinks>
          <a>
            <SearchOutlinedIcon />
          </a>
          <a>
            <TranslateOutlinedIcon />
          </a>
          <a>
            <PersonOutlineOutlinedIcon />
          </a>
          <a>
            <MoreVertOutlinedIcon />
          </a>
        </SecundaryLinks>
      </BlogStyledNavBar>
    </>
  )
}

BlogNavbar.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BlogNavbar

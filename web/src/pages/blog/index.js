import React from 'react'
import PropTypes from 'prop-types'
import BlogHome from '@@views/blog/BlogHome/index'
import BlogNavbar from '@@components/Layout/Navbars/BlogNavbar'
import BlogFooter from '@@components/Layout/Footers/BlogFooter/index'

const BlogPage = () => {
  return (
    <>
      <BlogNavbar />
      <BlogHome />
      <BlogFooter />
    </>
  )
}

BlogPage.propTypes = {}

export default BlogPage

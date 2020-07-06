import React from 'react'
import PropTypes from 'prop-types'
import BlogNavbar from '@@components/Layout/Navbars/BlogNavbar'
import BlogHome from '../../src/views/blog/BlogHome/index'
import BlogFooter from '../../src/components/Layout/Footers/BlogFooter/index'

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

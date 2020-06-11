import React from 'react'
import PropTypes from 'prop-types'

const data = 'slatam.com'

const BlogNavbar = ({ children }) => {
  return <div>{children({ data })}</div>
}

BlogNavbar.propTypes = {}

export default BlogNavbar

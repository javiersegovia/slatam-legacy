import React from 'react'

import PropTypes from 'prop-types'
import { format, isDate } from 'date-fns'

const UserInfoTitleRight = ({ content }) => {
  if (isDate(content)) {
    const formattedDate = format(content, 'MMMM d, y')
    return <p className="UserInfoTitleRight">{`on ${formattedDate}`}</p>
  }
  return <>{content}</>
}

UserInfoTitleRight.propTypes = {
  content: PropTypes.any,
}

export default UserInfoTitleRight

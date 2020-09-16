import React, { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import { StyledSecundaryLinks } from './styled'

const NavSecundaryLinks = () => {
  return (
    <StyledSecundaryLinks>
      <Link href="#">
        <a className="StyledSecundaryLinks__linkColor">
          <SearchOutlinedIcon />
        </a>
      </Link>
      <Link href="#">
        <a className="StyledSecundaryLinks__linkColor">
          <TranslateOutlinedIcon />
        </a>
      </Link>
      <Link href="#">
        <a className="StyledSecundaryLinks__linkColor">
          <PersonOutlineOutlinedIcon />
        </a>
      </Link>
      <Link href="#">
        <a className="StyledSecundaryLinks__linkColor">
          <MoreVertOutlinedIcon />
        </a>
      </Link>
    </StyledSecundaryLinks>
  )
}

export default NavSecundaryLinks

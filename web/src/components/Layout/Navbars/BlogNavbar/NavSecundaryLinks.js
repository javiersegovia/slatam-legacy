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
        <a>
          <SearchOutlinedIcon style={{ color: '#B2B2B2' }} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <TranslateOutlinedIcon style={{ color: '#B2B2B2' }} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <PersonOutlineOutlinedIcon style={{ color: '#B2B2B2' }} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <MoreVertOutlinedIcon style={{ color: '#B2B2B2' }} />
        </a>
      </Link>
    </StyledSecundaryLinks>
  )
}

export default NavSecundaryLinks

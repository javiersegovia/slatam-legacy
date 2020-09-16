import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserInfoTitleRight from './UserInfoTitleRight'

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;

  .UserInfo__titleContainer {
    display: flex;
    align-items: center;
  }

  .UserInfo__avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: url(${props => props.avatarUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .UserInfo__info {
    margin-left: 10px;
  }

  .UserInfo__title {
    font-weight: bold;
    color: ${props => props.theme.palette.primary.main};
  }

  .UserInfo__subtitle {
    font-size: 15px;
  }

  .UserInfoTitleRight {
    margin: 0 0 0 6px;
  }
`

const UserInfo = ({
  avatarUrl,
  title,
  subtitle = null,
  bottomSubtitle = null,
  titleRight = null,
  redirectTo = null,
}) => {
  return (
    <StyledUserInfo avatarUrl={avatarUrl}>
      <Link href={redirectTo}>
        <a>
          <div className="UserInfo__avatar" />
        </a>
      </Link>
      <div className="UserInfo__info">
        <div className="UserInfo__titleContainer">
          <Link href={redirectTo}>
            <a className="UserInfo__title">{title}</a>
          </Link>
          {titleRight && <UserInfoTitleRight content={titleRight} />}
        </div>
        {subtitle && <div className="UserInfo__subtitle">{subtitle}</div>}
        {bottomSubtitle && (
          <div className="UserInfo__bottomSubtitle">{bottomSubtitle}</div>
        )}
      </div>
    </StyledUserInfo>
  )
}

UserInfo.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  avatarUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default UserInfo

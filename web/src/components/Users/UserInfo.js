import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledUserInfo = styled.div`
  display: flex;
  .UserInfo__avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  .UserInfo__info {
    margin-left: 10px;
  }

  .UserInfo__subtitle {
    font-size: 15px;
  }
`

const UserInfoExample = props => {
  return (
    <div>
      <UserInfo subtitle="Fernando Portela" />
      <UserInfo
        subtitle={
          <a href="/company" className="estilospersonalizadoscompany">
            Company
          </a>
        }
      />
      <UserInfo
        subtitle={
          <a href="mailto@admin@slatam.com" style={{ fontSize: '30px' }}>
            admin@slatam.com
          </a>
        }
      />
    </div>
  )
}

UserInfoExample.propTypes = {}

const UserInfo = ({
  avatar,
  title,
  subtitle = null,
  bottomSubtitle = null,
  titleRight = null,
}) => {
  return (
    <StyledUserInfo>
      <div className="UserInfo__avatar" />
      <div className="UserInfo__info">
        <div className="UserInfo__title" />
        <div className="UserInfo__subtitle">{subtitle}</div>
        {bottomSubtitle && <div className="UserInfo__bottomSubtitle" />}
        <div className="UserInfo__titleRight" />
      </div>
    </StyledUserInfo>
  )
}

UserInfo.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default UserInfo

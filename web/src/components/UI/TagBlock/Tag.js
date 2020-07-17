import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.div`
  height: 22px;
  width: max-content;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  padding: 3px 15px 0 15px;
  color: white;
  background: ${props => props.color};
  border-radius: 15px;
  cursor: pointer;
`
const Tag = ({ category, categoryHref, color }) => {
  return (
    <StyledTag color={color}>
      <a href={categoryHref}>{category}</a>
    </StyledTag>
  )
}

export default Tag

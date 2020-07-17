import React from 'react'
import styled from 'styled-components'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined'

const StyledContinueButton = styled.button`
  height: 25px;
  width: max-content;
  padding: 6px 10px 4px 10px;
  border: 1px solid ${props => props.theme.palette.primary.main};
  border-radius: 15px;
  color: ${props => props.theme.palette.primary.main};
  font-size: 0.9em;

  display: flex;
  align-items: center;
`

const ContinueButton = () => {
  return (
    <>
      <StyledContinueButton>
        Continue Reading
        <ArrowForwardOutlinedIcon />
      </StyledContinueButton>
    </>
  )
}

export default ContinueButton

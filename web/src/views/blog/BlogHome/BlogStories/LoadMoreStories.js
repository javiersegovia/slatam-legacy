import React from 'react'
import styled from 'styled-components'

const StyledLoadMoreStories = styled.button`
  margin: 24px 0;
  height: 50px;
  width: 100%;
  transition: background 0.3s ease-out;

  /* .StyledLoadMoreStories__animationDiv {
    height: 0%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed black;
    transition: background 0.3s, height 0.3s;
  }

  & .StyledLoadMoreStories__animationDiv:hover {
    background: #012d78;
    opacity: 0.3;
    height: 100%;
    color: white;
  } */

  &:hover {
    background: #012d78;
    opacity: 0.3;
    color: white;
  }
`

const LoadMoreStories = () => {
  return (
    <StyledLoadMoreStories type="button">
      {/* <div className="StyledLoadMoreStories__animationDiv"/> */}
      Load More Stories
    </StyledLoadMoreStories>
  )
}

export default LoadMoreStories

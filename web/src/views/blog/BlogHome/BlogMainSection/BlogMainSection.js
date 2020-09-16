import React from 'react'
import styled from 'styled-components'
import MainArticle from './MainArticle'
import Aside from './Aside'

export const StyledMainSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: 3fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`

const BlogMainSection = () => {
  return (
    <>
      <StyledMainSection>
        <MainArticle />
        <Aside />
      </StyledMainSection>
    </>
  )
}

export default BlogMainSection

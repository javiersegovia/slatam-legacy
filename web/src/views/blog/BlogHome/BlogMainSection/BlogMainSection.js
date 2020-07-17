import React from 'react'
import MainArticle from './MainArticle'
import Aside from './Aside'
import { StyledMainSection } from '../styled'

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

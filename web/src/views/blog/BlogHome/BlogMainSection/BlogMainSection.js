import React from 'react'
import { StyledMainSection, Aside, AsideArticleCard } from '../styled'

import MainArticle from './MainArticle'

const BlogMainSection = () => {
  return (
    <>
      <StyledMainSection>
        {/* <MainArticle>
          <AuthorBlock>Author Block</AuthorBlock>
          <MainImage>Main Image</MainImage>
          <MainTitle>Main Title</MainTitle>
          <TagBlock> Tag Block</TagBlock>
          <PreviewTextBlock>
            <p>Preview Text</p>
            <div>Continue Reading Button</div>
          </PreviewTextBlock>
        </MainArticle> */}
        <MainArticle />
        <Aside>
          <AsideArticleCard>Article Preview 1</AsideArticleCard>
          <AsideArticleCard>Article Preview 2</AsideArticleCard>
          <AsideArticleCard>Article Preview 3</AsideArticleCard>
        </Aside>
      </StyledMainSection>
    </>
  )
}

export default BlogMainSection

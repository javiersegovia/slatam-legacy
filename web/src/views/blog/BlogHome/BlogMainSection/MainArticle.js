import React from 'react'
import Link from 'next/link'
import UserInfo from '@@components/Users/UserInfo'
import {
  StyledMainArticle,
  AuthorBlock,
  MainImage,
  MainTitle,
  TagBlock,
  PreviewTextBlock,
} from '../styled'

const MainArticle = () => {
  return (
    <StyledMainArticle>
      <AuthorBlock>
        <UserInfo
          title="David Chacon"
          avatarUrl="https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg"
          redirectTo="/"
          titleRight={new Date()}
          subtitle="CEO, My Home"
          // bottomSubtitle="Caracas, Venezuela"
        />
      </AuthorBlock>
      <MainImage>Main Image</MainImage>
      <MainTitle>Main Title</MainTitle>
      <TagBlock> Tag Block</TagBlock>
      <PreviewTextBlock>
        <p>Preview Text</p>
        <div>Continue Reading Button</div>
      </PreviewTextBlock>
    </StyledMainArticle>
  )
}

export default MainArticle

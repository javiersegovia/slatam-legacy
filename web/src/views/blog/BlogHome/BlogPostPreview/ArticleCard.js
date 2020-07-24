import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import UserInfo from '@@components/Users/UserInfo'
import TagBlock from '@@components/UI/TagBlock'

const StyledArticleCard = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #e8ebf7;
  box-sizing: border-box;
  padding: 15px 0 25px;

  .StyledArticleCard__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 1em;
  }

  .StyledArticleCard__previewTitle {
    margin: 1em 0;
    cursor: pointer;
  }

  .StyledArticleCard__previewImage {
    width: 100%;
    margin-bottom: 25px;
    cursor: pointer;
  }
`

const ArticleCard = ({ title, imageUrl = null, size }) => {
  return (
    <StyledArticleCard>
      <div className="StyledArticleCard__wrapper">
        <UserInfo
          title="David Chacon"
          avatarUrl="https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg"
          redirectTo="/"
          titleRight={new Date()}
          subtitle="CEO, My Home"
        />
        <Link href="#">
          <h5 className="StyledArticleCard__previewTitle">{title}</h5>
        </Link>
        {imageUrl && (
          <Link href="/">
            <img
              src={imageUrl}
              alt="Preview"
              className="StyledArticleCard__previewImage"
            />
          </Link>
        )}
        <TagBlock className="StyledArticleCard__tagBlock" size={size} />
      </div>
    </StyledArticleCard>
  )
}

export default ArticleCard

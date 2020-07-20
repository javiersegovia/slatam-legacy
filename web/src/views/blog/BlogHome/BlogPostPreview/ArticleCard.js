import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import UserInfo from '@@components/Users/UserInfo'
import TagBlock from '@@components/UI/TagBlock'

const StyledArticleCard = styled.div`
  height: 100%;
  width: 416px; /* Existe un bug con el width. Si se pone en 100%, se descontrola, aparentemente se debe al componente TagBlock */
  border: 1px solid #e8ebf7;
  box-sizing: border-box;

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
    height: 230px;
    width: 450px;
    margin-bottom: 25px;
    background: url(${props => props.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  /* StyledArticleCard__tagBlock => no pude controlar el margen del componente desde este componente */
`

const ArticleCard = ({ title, imageUrl = null, size }) => {
  return (
    <StyledArticleCard imageUrl={imageUrl}>
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
        {imageUrl && <div className="StyledArticleCard__previewImage" />}
        <TagBlock className="StyledArticleCard__tagBlock" size={size} />
      </div>
    </StyledArticleCard>
  )
}

export default ArticleCard

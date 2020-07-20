import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import UserInfo from '@@components/Users/UserInfo'
import TagBlock from '@@components/UI/TagBlock/index'
import ContinueButton from '@@components/UI/BlogButtons/ContinueButton'

const StyledMainArticle = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 5fr 4fr 1fr 2.5fr;
`

const AuthorBlock = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 7px;
`

const MainImage = styled.img`
  height: 100%;
  width: 82%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const MainTitle = styled.h1`
  height: 100%;
  width: 100%;
  margin: 0;
  text-align: left;
`

const PreviewTextBlock = styled.div`
  height: 100%;
  width: 82%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    font-size: 1.3em;
    margin: 0;
  }
`

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
      <MainImage imageUrl="https://miro.medium.com/max/3052/1*lMeKEkTBKSTja5ZSfFm81w.png" />
      <MainTitle>
        4 Unexpected Methods For Becoming An Authority On Nearly Any Subject
      </MainTitle>
      <TagBlock />

      <PreviewTextBlock>
        {/* El preview text debe recibir el id del articulo que se esta mostrando y el limite de palabras que puede mostrar. El limite expuesto con Lorem Ipsum se ve bien, porque en la pantalla desktop el usuario puede ver el titulo y el texto completo. */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur...
        </p>
      </PreviewTextBlock>
      <ContinueButton />
    </StyledMainArticle>
  )
}

export default MainArticle

// Estructura y posicionamiento de los elementos del Home

import styled from 'styled-components'

export const BlogStyledHome = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;

  /* justify-items: center;
  align-items: center; */
`
// Seccion 1
export const StyledMainSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: 3fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`
export const StyledMainArticle = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 5fr 4fr 1fr 2.5fr;
  /* border: 1px dashed black; */
`
// --> Section 1 components
export const AuthorBlock = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 7px;
  /* border: 1px dashed black; */
  /* background-color: lightblue; */
`
export const MainImage = styled.img`
  height: 100%;
  width: 82%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* border: 1px dashed black; */
  /* background-color: lightblue; */
`
export const MainTitle = styled.h1`
  height: 100%;
  width: 100%;
  margin: 0;
  text-align: left;
`

export const PreviewTextBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background-color: #f3f3f3; */

  p {
    font-size: 1.3em;
    margin: 0;
  }
`

export const StyledAside = styled.aside`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(3, 1fr);
  /* border: 1px dashed black; */
`

// Seccion 2
export const StyledFirstArticles = styled.section`
  height: 100%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`
// --> Section 2 components
export const FirstArticleCard = styled.div`
  height: 232px;
  width: 100%;
  /* border: 1px dashed black; */
  background-color: #f3f3f3;
`
// Seccion 3
export const StyledBlogStories = styled.section`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;

  /* border: 1px dashed black; */
  text-align: center;
`
// --> Section 3 components

export const StoryPreview = styled.li`
  height: 100%;
  width: 100%;
  /* border: 1px dashed black; */
  background-color: #f3f3f3;
`

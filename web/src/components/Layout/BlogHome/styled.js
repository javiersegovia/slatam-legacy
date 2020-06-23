import React from 'react'
import styled from 'styled-components'

export const BlogStyledHome = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;

  border: 1px dashed black;
`
// Seccion 1
export const BlogMainSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-items: center;
`
export const MainArticle = styled.main`
  display: grid;
  border: 1px dashed black;
`
export const Aside = styled.aside`
  display: grid;
  border: 1px dashed black;
`
// Seccion 2
export const BlogFirstArticles = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`
// Seccion 3
export const BlogStories = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-items: center;

  border: 1px dashed black;
  text-align: center;
`

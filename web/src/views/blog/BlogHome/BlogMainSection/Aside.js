import React from 'react'
import styled from 'styled-components'
import ArticleCard from '../BlogPostPreview/ArticleCard'

const previewArticles = [
  {
    title: 'How to grow your personal brand on youtube',
    imageUrl:
      'https://www.iebschool.com/blog/wp-content/uploads/2019/09/IT-BUSINESS-PARTNER-1280x720.jpg',
  },
  {
    title: 'How to grow your personal brand on youtube',
    imageUrl:
      'https://www.iebschool.com/blog/wp-content/uploads/2019/09/IT-BUSINESS-PARTNER-1280x720.jpg',
  },
  {
    title: 'How to grow your personal brand on youtube',
    imageUrl:
      'https://www.iebschool.com/blog/wp-content/uploads/2019/09/IT-BUSINESS-PARTNER-1280x720.jpg',
  },
]

const StyledAside = styled.aside`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(3, 1fr);
`

const Aside = () => {
  const size = 2
  return (
    <StyledAside>
      {previewArticles.map(cont => (
        <ArticleCard title={cont.title} size={size} />
      ))}
    </StyledAside>
  )
}

export default Aside

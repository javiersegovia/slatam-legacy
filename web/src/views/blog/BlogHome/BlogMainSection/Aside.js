import React from 'react'
import styled from 'styled-components'
import ArticleCard from '../BlogPostPreview/ArticleCard'

const previewArticles = [
  {
    title: 'How to grow your personal brand on youtube',
    imageUrl:
      'https://cdn.editage.com/insights/editagecom/production/styles/detail_page_image/public/greennnnnn_0.jpg?itok=W0-K23gy',
  },
  {
    title: 'How to grow your personal brand on youtube',
    imageUrl:
      'https://cdn.editage.com/insights/editagecom/production/styles/detail_page_image/public/greennnnnn_0.jpg?itok=W0-K23gy',
  },
  {
    title: 'How to grow your personal brand on youtube',
    imageUrl:
      'https://cdn.editage.com/insights/editagecom/production/styles/detail_page_image/public/greennnnnn_0.jpg?itok=W0-K23gy',
  },
]

const StyledAside = styled.aside`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: repeat(3, max-content);
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

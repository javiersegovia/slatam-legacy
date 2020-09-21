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

const StyledFirstArticles = styled.section`
  height: 100%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`

const BlogFirstArticles = () => {
  const size = 3
  return (
    <>
      <StyledFirstArticles>
        {previewArticles.map(cont => (
          <ArticleCard
            title={cont.title}
            imageUrl={cont.imageUrl}
            size={size}
          />
        ))}
      </StyledFirstArticles>
    </>
  )
}

export default BlogFirstArticles

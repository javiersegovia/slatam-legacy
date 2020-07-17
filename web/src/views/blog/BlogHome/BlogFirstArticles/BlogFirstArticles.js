import React from 'react'
import ArticleCard from '@@components/BlogPostPreview/ArticleCard'

import { StyledFirstArticles } from '../styled'

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

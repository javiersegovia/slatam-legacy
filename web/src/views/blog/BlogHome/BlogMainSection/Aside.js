import React from 'react'
import ArticleCard from '@@components/BlogPostPreview/ArticleCard'
import { StyledAside } from '../styled'

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

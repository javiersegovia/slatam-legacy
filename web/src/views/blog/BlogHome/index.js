import React from 'react'
import BlogFirstArticles from './BlogFirstArticles/BlogFirstArticles'
import BlogMainSection from './BlogMainSection/BlogMainSection'
import BlogStories from './BlogStories/BlogStories'
import { BlogStyledHome } from './styled'

const BlogHome = () => {
  return (
    <>
      <BlogStyledHome>
        <BlogMainSection />
        <BlogFirstArticles />
        <BlogStories />
      </BlogStyledHome>
    </>
  )
}

export default BlogHome

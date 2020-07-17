import React from 'react'
import styled from 'styled-components'

import BlogMainSection from './BlogMainSection/BlogMainSection'
import BlogFirstArticles from './BlogFirstArticles/BlogFirstArticles'
import BlogStories from './BlogStories/BlogStories'
import { BlogStyledHome } from './styled'

const Wrapper = styled.div`
  margin: 2em 2em 0 3em;
`

const BlogHome = () => {
  return (
    <>
      <Wrapper>
        <BlogStyledHome>
          <BlogMainSection />
          <BlogFirstArticles />
          <BlogStories />
        </BlogStyledHome>
      </Wrapper>
    </>
  )
}

export default BlogHome

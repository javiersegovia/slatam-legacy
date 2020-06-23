import React from 'react'
import {
  BlogStyledHome,
  BlogMainSection,
  BlogFirstArticles,
  BlogStories,
} from './styled'

const Home = () => {
  return (
    <>
      <BlogStyledHome>
        <BlogMainSection>
          <div>Main Article</div>
          <div>Aside Section</div>
        </BlogMainSection>
        <BlogFirstArticles>
          <div>Article 1</div>
          <div>Article 2</div>
          <div>Article 3</div>
        </BlogFirstArticles>
        <BlogStories>
          <ul>
            <h6>Blog Stories</h6>
            <h6>Story 1</h6>
            <h6>Story 2</h6>
            <h6>Story 3</h6>
            <h6>Story 4</h6>
            <h6>Story 5</h6>
            <h6>Story 6</h6>
          </ul>
        </BlogStories>
      </BlogStyledHome>
    </>
  )
}

export default Home

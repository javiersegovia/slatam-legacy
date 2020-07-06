import React from 'react'
import { StyledBlogStories, StoryPreview } from '../styled'

const BlogStories = () => {
  return (
    <>
      <StyledBlogStories>
        <h6>Blog Stories</h6>
        <StoryPreview>Story 1</StoryPreview>
        <StoryPreview>Story 2</StoryPreview>
        <StoryPreview>Story 3</StoryPreview>
        <StoryPreview>Story 4</StoryPreview>
        <StoryPreview>Story 5</StoryPreview>
        <button type="button">Load More Stories</button>
      </StyledBlogStories>
    </>
  )
}

export default BlogStories

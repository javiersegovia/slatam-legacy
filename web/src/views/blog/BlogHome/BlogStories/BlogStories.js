import React from 'react'
import styled from 'styled-components'
import StoryCard from './StoryPreview'
import LoadMoreStories from './LoadMoreStories'

const StoryPreviewData = [
  {
    title:
      '4 Unexpected Methods for Becoming an Authority on Nearly Any Subject',
    id: 1,
  },
  {
    title:
      '4 Unexpected Methods for Becoming an Authority on Nearly Any Subject',
    id: 1,
  },
  {
    title:
      '4 Unexpected Methods for Becoming an Authority on Nearly Any Subject',
    id: 1,
  },
  {
    title:
      '4 Unexpected Methods for Becoming an Authority on Nearly Any Subject',
    id: 1,
  },
  {
    title:
      '4 Unexpected Methods for Becoming an Authority on Nearly Any Subject',
    id: 1,
  },
]

const WrapperStories = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`

const StyledBlogStories = styled.section`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`
const BlogStories = () => {
  const size = 1
  return (
    <>
      <WrapperStories>
        <h1>All Stories</h1>
        <StyledBlogStories>
          {StoryPreviewData.map(cont => (
            <StoryCard title={cont.title} size={size} />
          ))}
        </StyledBlogStories>
        <LoadMoreStories />
      </WrapperStories>
    </>
  )
}

export default BlogStories

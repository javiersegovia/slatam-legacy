import React from 'react'
import styled from 'styled-components'
import UserInfo from '@@components/Users/UserInfo/'
import TagBlock from '@@components/UI/TagBlock/index'

const StyledStoryPreview = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20px;
  border-bottom: 1px solid #e8ebf7;

  .IdRapper__previewTitle {
    margin: 1em 0;
  }
`

const IdWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;

  .TagBlock {
    width: max-content;
  }
`

const StoryCard = ({ title, size }) => {
  return (
    <StyledStoryPreview>
      <IdWrapper>
        <UserInfo
          title="David Chacon"
          avatarUrl="https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg"
          redirectTo="/"
          titleRight={new Date()}
          subtitle="CEO, My Home"
        />
        {/* <TagBlock size={size} className="IdRapper__tagBlock" /> */}
      </IdWrapper>
      <h4 className="IdRapper__previewTitle">{title}</h4>
    </StyledStoryPreview>
  )
}

export default StoryCard

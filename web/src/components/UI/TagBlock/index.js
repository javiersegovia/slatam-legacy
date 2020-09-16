import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const defaultTagList = [
  {
    category: 'World',
    backgroundColor: '#00916F',
    categoryHref: '/',
  },
  {
    category: 'B2B',
    backgroundColor: '#FE4E00',
    categoryHref: '/',
  },
  {
    category: 'Technology',
    backgroundColor: '#012D78',
    categoryHref: '/',
  },
  {
    category: 'Outsourcing',
    backgroundColor: '#7A08C9',
    categoryHref: '/',
  },
  {
    category: 'Shipping',
    backgroundColor: '#D72638',
    categoryHref: '/',
  },
]

const StyledBlockTag = styled.div`
  height: max-content;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, max-content));
  grid-column-gap: 15px;
  justify-items: start;
  align-items: center;
`

const TagBlock = ({ size, className = '', tagList = defaultTagList }) => {
  return (
    <StyledBlockTag className={className}>
      {tagList.slice(0, size).map(cont => (
        <Tag
          category={cont.category}
          categoryHref={cont.categoryHref}
          backgroundColor={cont.backgroundColor}
        />
      ))}
    </StyledBlockTag>
  )
}

export default TagBlock

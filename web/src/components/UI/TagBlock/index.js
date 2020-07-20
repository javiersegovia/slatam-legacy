import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const tagList = [
  {
    category: 'World',
    color: '#00916F',
    categoryHref: '/',
  },
  {
    category: 'B2B',
    color: '#FE4E00',
    categoryHref: '/',
  },
  {
    category: 'Technology',
    color: '#012D78',
    categoryHref: '/',
  },
  {
    category: 'Outsourcing',
    color: '#7A08C9',
    categoryHref: '/',
  },
  {
    category: 'Shipping',
    color: '#D72638',
    categoryHref: '/',
  },
]

const StyledBlockTag = styled.div`
  height: max-content;
  /* width: 100%; */
  /* background-color: #f3f3f3; */

  display: grid;
  grid-template-columns: repeat(5, minmax(0, max-content));
  grid-column-gap: 15px;
  justify-items: start;
  align-items: center;
`

const TagBlock = ({ size }) => {
  return (
    <StyledBlockTag>
      {tagList.slice(0, size).map(cont => (
        <Tag
          category={cont.category}
          categoryHref={cont.categoryHref}
          color={cont.color}
        />
      ))}
    </StyledBlockTag>
  )
}

export default TagBlock

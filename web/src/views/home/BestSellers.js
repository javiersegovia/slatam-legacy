import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import faker from 'faker'
import Container from '@@components/UI/Container'
import ProductsGrid from '@@components/Products/ProductsGrid'
import SectionTitle from './SectionTitle'

const SectionWrapper = styled.div`
  margin-top: 60px;
`

const generatedProducts = Array(12)
  .fill(null)
  .map(() => ({
    id: faker.random.uuid(),
    slug: faker.lorem.slug(),
    title: faker.commerce.productName(),
    minPrice: faker.commerce.price(),
    maxPrice: faker.commerce.price(),
    minimumOrder: Math.floor(Math.random() * 100) + 1,
    countryCode: faker.address.countryCode(),
    image:
      'https://storage.sg.content-cdn.io/in-resources/fc93a3a8-f69b-444c-8b76-9848de9338d0/Images/userimages/topcategories-img1.jpg',
    owner: {
      id: faker.random.uuid(),
      name: faker.company.companyName(),
      isVerified: faker.random.boolean(),
      rating: {
        average: Math.random() * 5 + 1,
        numberOfRatings: Math.floor(Math.random() * 200) + 1,
      },
    },
  }))

const BestSellers = () => {
  return (
    <SectionWrapper>
      <Container limited>
        <SectionTitle href="/" seeMore="See more">
          Best **sellers**
        </SectionTitle>
        <ProductsGrid products={generatedProducts} />
      </Container>
    </SectionWrapper>
  )
}

BestSellers.propTypes = {}

export default BestSellers

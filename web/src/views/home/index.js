import React from 'react'
import FeaturesGrid from './FeaturesGrid'
import PopularCategories from './PopularCategories'
import RelatedProducts from './RelatedProducts'
import BestSellers from './BestSellers'
import VerifiedSuppliers from './VerifiedSuppliers'
import StartSelling from './StartSelling'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <>
      <FeaturesGrid />
      <PopularCategories />
      <RelatedProducts />
      <BestSellers />
      <VerifiedSuppliers />
      <StartSelling />
      <Newsletter />
    </>
  )
}

export default Home

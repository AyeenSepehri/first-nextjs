import React from 'react'
import Image from 'next/image'
import TourCover from "../../public/Covers/Tour.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'
import CardContainer from '../Components/CardContainer/CardContainer'

const TourPage = () => {
  return (
    <div>
      <Image
        src={TourCover}
        width="100vw"
        alt="Picture of the author"
        priority={true}
      />
      <CardContainer>
        <ProductBox />
      </CardContainer>
    </div>
  )
}

export default TourPage
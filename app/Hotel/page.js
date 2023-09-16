import React from 'react'
import Image from 'next/image'
import HotelCover from "../../public/Covers/Hotel.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'
import CardContainer from '../Components/CardContainer/CardContainer'


const HotelPage = () => {
  return (
    <div>
      <Image
        src={HotelCover}
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

export default HotelPage
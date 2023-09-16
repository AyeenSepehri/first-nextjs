import React from 'react'
import Image from 'next/image'
import HotelCover from "../../public/Covers/Hotel.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'


const HotelPage = () => {
  return (
    <div>
      <Image
        src={HotelCover}
        width="100vw"
        alt="Picture of the author"
        priority={true}
      />
      <ProductBox/>
    </div>
  )
}

export default HotelPage
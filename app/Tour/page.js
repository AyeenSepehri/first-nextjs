import React from 'react'
import Image from 'next/image'
import TourCover from "../../public/Covers/Tour.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'

const TourPage = () => {
  return (
    <div>
      <Image
        src={TourCover}
        width="100vw"
        alt="Picture of the author"
        priority={true}
      />
      <ProductBox/>
    </div>
  )
}

export default TourPage
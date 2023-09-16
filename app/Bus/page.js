import React from 'react'
import Image from 'next/image'
import BusCover from "../../public/Covers/Bus.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'

const BusPage = () => {
  return (
    <div>
      <Image
        src={BusCover}
        width="100vw"
        alt="Picture of the author"
        priority={true}
        className="mb-0"
      />
      <ProductBox />

    </div>
  )
}

export default BusPage
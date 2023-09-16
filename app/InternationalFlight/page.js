import React from 'react'
import Image from 'next/image'
import IranOutCover from "../../public/Covers/iranOut.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'

const IranOutPage = () => {
  return (
    <div>
      <Image
        src={IranOutCover}
        width="100vw"
        alt="Picture of the author"
        priority={true}
      />
      <ProductBox/>
    </div>
  )
}

export default IranOutPage
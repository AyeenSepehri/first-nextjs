import React from 'react'
import Image from 'next/image'
import TrainCover from "../../public/Covers/Train.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'

const TrainPage = () => {
  return (
    <div>
      <Image
        src={TrainCover}
        width="100vw"
        alt="Picture of the author"
        priority={true}
      />
      <ProductBox/>
    </div>
  )
}

export default TrainPage
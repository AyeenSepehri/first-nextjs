import React from 'react'
import Image from 'next/image'
import TrainCover from "../../public/Covers/Train.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'
import CardContainer from '../Components/CardContainer/CardContainer'

const TrainPage = () => {
  return (
    <div>
      <Image
        src={TrainCover}
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

export default TrainPage
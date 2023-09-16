import React from 'react'
import Image from 'next/image'
import IranOutCover from "../../public/Covers/iranOut.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'
import CardContainer from '../Components/CardContainer/CardContainer'

const IranOutPage = () => {
  return (
    <div>
      <Image
        src={IranOutCover}
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

export default IranOutPage
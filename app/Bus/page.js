import React from 'react'
import Image from 'next/image'
import BusCover from "../../public/Covers/Bus.png"
import ProductBox from '../Components/maduleSection/MainCard/ProductBox'
import CardContainer from '../Components/CardContainer/CardContainer'

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
      <CardContainer>
        <ProductBox />
      </CardContainer>
    </div>
  )
}

export default BusPage
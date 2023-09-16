"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const Features = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className='flex justify-around'>
        <ul className='tab-link flex font-medium' >
          <li className='p-5 divide-y-4 divide-cyan-800'>
            <Link className='block text-center mb-1' href="/">
              <Image className='block mx-auto mb-1' src="/svg/TabVectors/airplane.svg" height={35} width={35} />
              پرواز داخلی
            </Link>
          </li>
          <li className='content-center p-5'>
            <Link className={pathname == "/InternationalFlight" ? "bg-slate-600" : "block text-center mb-1"} href="/InternationalFlight">
              <Image className='block mx-auto mb-1' src="/svg/TabVectors/airplanePlanet.svg" height={35} width={35} />
              {/* <a className={router.pathname == "/InternationalFlight" ? "active" : ""}> */}
              پرواز خارجی
              {/* </a> */}
            </Link>
          </li>
          <li className='p-5'>
            <Link className='block text-center mb-1' href="/Train">
              <Image className='block mx-auto mb-1' src="/svg/TabVectors/train.svg" height={35} width={35} />
              قطار
            </Link>
          </li>
          <li className='p-5'>
            <Link className='block text-center mb-1' href="/Bus">
              <Image className='block mx-auto mb-1' src="/svg/TabVectors/bus.svg" height={35} width={35} />
              اتوبوس
            </Link>
          </li>
          <li className='p-5'>
            <Link className='block text-center mb-1' href="/Tour">
              <Image className='block mx-auto mb-1' src="/svg/TabVectors/tour.svg" height={35} width={35} />
              تور
            </Link>
          </li>
          <li className='p-5'>
            <Link className='block text-center mb-1' href="/Hotel">
              <Image className='block mx-auto mb-1' src="/svg/TabVectors/hotel.svg" height={35} width={35} />
              هتل
            </Link>
          </li>
          <li className="tab-links-active" role="none" style={{transform: "translateX(-14.4px) scaleX(1.152)" ,visibility: "visible"}}></li>
        </ul>
      </div>
    </div>
  )
}

export default Features
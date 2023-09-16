"use client";
import React from 'react'
// import {LogoIcon} from "../svg/LogoIcon"
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='flex p-1 mr-4'>
        <nav>
            <ul className='flex p-2 divide-x-2 divide-solid text-center items-center'>
                <li className='p-2'><Image src="/svg/Logo.svg" width={50} height={50}/></li>
                <li className='p-2' >بلیط</li>
                <li className='p-2'>هتل</li>
                <li className='p-2'>تور</li>
                <li className='p-2'>بیشتر</li>
            </ul>
        </nav>
        <div className='flex p-3 gap-5 h-full mr-auto mt-3 items-center text-lg font-medium'>
            <a>تماس با ما</a>
            <a>سفر های من</a>
            <a>حساب کاربری</a>
        </div>
    </div>
  )
}

export default NavBar
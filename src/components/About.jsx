import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const About = ({aboutapi}) => {
  return (
    <div className='bg-about-img md:bg-none z-50 bg-center h-auto w-screen' id="about">
    <div className='flex flex-col p-20 md:p-10 h-[600px] bg-opacity-90 bg-gradient-to-r from-slate-50 via-[#ffff] to-transparent md:mx-auto lg:justify-center lg:items-center'>
        <h1 className='text-6xl lg:text-5xl sm:text-4xl font-bold mb-10 md:mb-5'>{aboutapi.title}</h1>
        <div className='flex border-b w-[30%] lg:w-[50%] border-neutral-500 text-center lg:justify-center mb-8 md:mb-5 pb-2'>
        <h2 className='text-xl lg:text-lg md:text-md sm:text-sm font-bold'>{aboutapi.subtitle}</h2>
        </div>
        <p className='w-[60vw] leading-8 sm:text-sm sm:leading-7'>{aboutapi.description}</p>
        <div className='flex mt-10 items-center gap-5 cursor-pointer'>
        <button className='font-bold text-lg md:text-md'>View More</button>
        <div className='bg-red-500 w-12 h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 rounded-full flex justify-center items-center text-2xl md:text-xl text-white hover:translate-x-10 duration-300 transition ease-in-out'><BsArrowRight /></div>
        </div>
    </div>

    </div>
  )
}

export default About
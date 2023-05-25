import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BsArrowRight } from 'react-icons/bs'
import {truncate} from 'lodash'
import { Link } from 'react-router-dom'

const Slide = ({ ifExists, endpoint: {title, subtitle, items} }) => {

const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    autoplay: true,
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1400: {perPage: 3},
        991: {perPage: 2.5},
        768: {perPage: 2},
        550: {perPage: 1},
    }
}


  return (
    <>
      <div className={`h-auto w-screen bg-cover bg-center selection:shadow-xl bg-[url('/images/heroimg.jpg')] ${ifExists && 'bg-none bg-gray-800'}`}>
      <div className="w-full h-full py-10 md:py-5 sm:py-0 backdrop-brightness-50">
        <div className="p-20 lg:p-10 md:p-8">
          <div className={`flex gap-5 xsm:gap-2 ${ ifExists && 'justify-end'}`}>
        <h1 className="text-5xl md:text-4xl sm:text-3xl xsm:text-2xl text-red-600 font-extrabold">{title}</h1>
        <h1 className="text-5xl md:text-4xl sm:text-3xl xsm:text-2xl text-white font-extrabold">{subtitle}</h1>
          </div>
        <div className="mt-20 md:mt-10">
          <Splide options={splideOptions}>
            {items.map((item, i) => (
              <SplideSlide key={i} className="my-10 lg:my-8">
                <div className={`relative grid items-center gap-4 md:gap-2 ${ifExists && 'pb-2 rounded-lg shadow shadow-slate-200 ring-2 ring-slate-200'}`}>
                <div className="w-auto relative flex justify-center overflow-hidden">
                    <img
                      src={item.img}
                      alt={`img/story/${i}`}
                      className={`w-90 h-72 ${ifExists && 'w-full h-auto object-cover'} shadow-md rounded-tl-lg rounded-tr-lg object-fit`}
                    />
                  </div>
                  <div className={`${ifExists && 'px-3'}grid items-center justify-items-start text-white`}>
                    <h1 className="text-2xl text-center font-semibold lg:text-xl">{item.title}</h1>
                    <p className={`${ifExists ? 'flex p-3 leading-7 md:leanding-5' : 'hidden'}`}>{truncate(item.text, {length: 100})}</p>
                  </div>
                </div>
                  
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <Link to="/menu">
        <div className='flex items-center justify-end md:justify-center my-10 mx-3 gap-5 cursor-pointer'>
        <button className=" text-white font-bold text-xl md:text-lg sm:text-md">View More</button>
        <div className='bg-red-500 w-12 h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 rounded-full flex justify-center items-center text-2xl md:text-xl text-white hover:translate-x-10 duration-300 transition ease-in'><BsArrowRight /></div>
        </div>
        </Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default Slide;

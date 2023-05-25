import React, { useState } from "react";
import SocialLink from "../components/utils/SocialLink";
import Scroll from './utils/Scroll';
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'


const Hero = ({heroapi: {socialLinks, title, subtitle}}) => {
const navigate = useNavigate();

const toMenu = () => {
  navigate("/menu")
}

  return (
    <>
      <div>
        <div className="h-screen w-screen bg-cover bg-center bg-opacity-50 shadow-xl bg-[url('/images/heroimg.jpg')]">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <div className="absolute top-[30vh] z-50 right-[37vw] md:right-[23vw] text-center">
          <h1 className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl font-extrabold filter drop-shadow-sm text-white">{title}</h1>
        <h2 className="mt-5 lg:top-[39vh] md:right-[33vw] md:top-[38vh] sm:right-[30vw] sm:top-[36vh] text-3xl lg:text-2xl md:text-xl sm:text-lg xsm:text-md filter text-white">{subtitle}</h2>
        <div className="flex mt-14 md:mt-8 text-white justify-center gap-5">
          <button onClick={toMenu} className="border font-bold py-2 px-8 sm:text-xs rounded-full hover:bg-white hover:text-black">Menu</button>
          <button className="border font-bold py-2 px-8 sm:text-xs rounded-full hover:bg-white hover:text-black">Book Now</button>
        </div>
          </div>
        </div>
        </div>
        <div className="grid items-center absolute top-[33vh] right-[5vw] gap-5">
           {
            socialLinks.map((val, i) => 
            <SocialLink key={i} val={val}/>
            )
           }
        </div >
        <Link to="about" smooth={true} offset={0} duration={1000} delay={50}>
          <div>
          <Scroll />
          </div>
          </Link>
      </div>
    </>
  );
};

export default Hero;

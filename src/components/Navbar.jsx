import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import SocialLink from "../components/utils/SocialLink";
import { Link } from 'react-router-dom'

const Navbar = ({heroapi: {socialLinks}}) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className='flex justify-between absolute top-0 w-full font-semi-bold text-white p-10 md:p-5 text-2xl z-50 hover:cursor-pointer'>
      <div>
      <Link to="/"><p>DDM</p></Link>
      </div>
      <div className="absolute right-10 flex md:hidden">
        <ul className="flex gap-5 md:gap-0">
        <li className="duration-200 hover:scale-110">About</li>
          <Link to="/menu"><li className="duration-200 hover:scale-110">Menu</li></Link>
          <li className="duration-200 hover:scale-110">Contact</li>
        </ul>
      </div>


        <div className="absolute right-8 hidden z-50 font-white md:flex">
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={() => setMobileMenu(true)} />
          )}
        </div>

        <div className={mobileMenu ? `fixed top-0 right-0 w-[60vw] h-full font-white bg-black blur-effect-theme transition translate-x-0 ease-in-out duration-1000` : `translate-x-full`}>
        <ul className={mobileMenu ? `absolute top-20 left-10 flex flex-col mt-5 lg:text-md md:text-md xsm:text-sm gap-8` : `hidden`}>
          <li className="duration-200 hover:scale-110">About</li>
          <li className="duration-200 hover:scale-110">Menu</li>
          <li className="duration-200 hover:scale-110">Booking</li>
          <li className="duration-200 hover:scale-110">Location</li>
          <li className="duration-200 hover:scale-110">Contact</li>
        </ul>
        <div className={mobileMenu ? `absolute right-[30%] bottom-[40%] gap-8 flex transition translate-x-0 ease-in-out duration-1000` : `hidden`}>
        {
            socialLinks.map((val, i) => 
            <SocialLink key={i} val={val}/>
            )
           }
        </div>
        </div>


    </header>
  );
};

export default Navbar;
